import Remote from "../components/Remote.tsx";

const ArrowPad = () => {
  return (
    <div class="grid grid-cols-5 grid-rows-3 gap-x-8 gap-y-4 w-full">
      <Remote feature="info">Info</Remote>
      <div></div>
      <Remote feature="arrow" args={{ direction: "up" }}>↑</Remote>
      <div></div>
      <Remote feature="channel" args={{ input: "list" }}>List</Remote>
      <div></div>
      <Remote feature="arrow" args={{ direction: "left" }}>←</Remote>
      <Remote feature="enter">◯</Remote>
      <Remote feature="arrow" args={{ direction: "right" }}>→</Remote>
      <div></div>
      <Remote feature="back">Back</Remote>
      <div></div>
      <Remote feature="arrow" args={{ direction: "down" }}>↓</Remote>
      <div></div>
      <Remote feature="exit">Exit</Remote>
    </div>
  );
};

export default ArrowPad;
