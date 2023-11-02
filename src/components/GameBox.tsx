import { Button, Divider, Drawer, Modal } from "rsuite";
import questions from "../data/questions";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


export default function GameBox() {
  const [selected, setSelected] = useState<number>();
  const [isViewingQuestion, setIsViewingQuestion] = useState<boolean>(false);

  const [answered, setAnswered] = useState<number[]>([]);
  const [itv, setItv] = useState<any>();

  function getRandom(list: any[]) {
    return list[Math.floor((Math.random()*list.length))];
  }

  const toggleDraw = () => {
    if (!itv) {
      let prevValue: number;
      const itv = setInterval(() => {
        const s = getRandom([0, 1, 2, 3, 4, 5].filter(i => ![...answered, prevValue].includes(i)));
        prevValue = s;
        setSelected(s);
      }, 200);

      setItv(itv);
    } else {
      clearInterval(itv);
      setItv(undefined);
    }
  }

  const viewQuestion = (index: number) => {
    setAnswered([...answered, index]);

    if (selected === index) {
      setIsViewingQuestion(true);
    }
  }

  return <div className="p-5">
    <div className="flex gap-3 mb-5 items-center">
      <div className="text-xl flex-grow font-semibold">Chặng I: Khởi động</div>
      <Button appearance="primary" onClick={() => toggleDraw()}>{itv ? "Dừng" : "Quay"}</Button>
    </div>

    <div className="grid grid-cols-3 gap-3">
      { questions.map((q, index) => <div
        key={index}
        onClick={() => viewQuestion(index)}
        className={`w-full h-72 border rounded-md p-3 text-9xl ${answered.includes(index) ? "bg-gray-100" : "bg-cyan-100"} flex flex-row items-center ${selected === index ? "border-8 border-blue-400" : ""}`}
      >
        <div className="text-center w-full font-semibold">{index + 1}</div>
      </div>) }
    </div>

    <Drawer size="full" placement="bottom" open={isViewingQuestion} onClose={() => setIsViewingQuestion(false)}>
      <Drawer.Body>
        <div className="w-full h-full">
          <div className="font-semibold mb-3 text-lg p-3 border bg-white rounded-md">{selected !== undefined && questions[selected].ask}</div>
          
          <div className="grid grid-cols-2 gap-3">
            { selected !== undefined && questions[selected].answers.map((answer, i) => <div key={i} className="bg-white border rounded-md p-4">
              {answer}
            </div>) }
          </div>

          <div className="w-full p-3 mt-2 text-lg flex flex-col items-center">
            <CountdownCircleTimer
              isPlaying
              size={80}
              duration={45}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              onComplete={() => setIsViewingQuestion(false)}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </div>
      </Drawer.Body>
    </Drawer>
  </div>
}