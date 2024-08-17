import Remote from "../components/Remote.tsx";

const Channel = () => {
  const channels = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div class="justify-center grid grid-cols-3 gap-x-8 gap-y-4 w-full">
      {channels.map((ch) => (
        <Remote key={ch} feature="channel" args={{ input: ch.toString() }}>
          {ch}
        </Remote>
      ))}
    </div>
  );
};

export default Channel;
