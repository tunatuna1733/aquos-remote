import Remote from "../components/Remote.tsx";

const ArrowControl = () => {
  return (
    <div class="grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 w-full">
      <Remote feature="d-button">d</Remote>
      <Remote feature="channel" args={{ input: "up" }}>⇑</Remote>
      <Remote feature="volume" args={{ direction: "up" }}>＋</Remote>
      <Remote feature="toggle_mute">🔇</Remote>
      <Remote feature="cc">CC</Remote>
      <Remote feature="channel" args={{ input: "down" }}>⇓</Remote>
      <Remote feature="volume" args={{ direction: "down" }}>ー</Remote>
      <Remote feature="menu">MENU</Remote>
    </div>
  );
};

export default ArrowControl;
