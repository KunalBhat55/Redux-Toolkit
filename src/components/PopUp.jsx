import { useState } from "react";

const YourComponent = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [time, setTime] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  setInterval(() => {
    const currentTime = new Date();
    const hrs =
      (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    const min =
      (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    const sec =
      (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    time = `${hrs}:${min}:${sec}`;
    setTime(time);
  }, 1000);

  return (
    <div className="transition-all">
      <div className="flex justify-center mt-5 items-center flex-col">
        <button className="p-2 text-xl bg-orange-500" onClick={toggleModal}>
          {isModalOpen ? `Close` : `Show Time`} 
        </button>
        {isModalOpen && ( 
          <div className="modal-overlay flex">
            <div className="modal">
              <div>
                <p className="text-7xl text-gray-700">{time}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourComponent;
