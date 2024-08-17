import ArrowControl from "../../islands/ArrowControl.tsx";
import ArrowPad from "../../islands/ArrowPad.tsx";
import Channel from "../../islands/Channel.tsx";
import Sleep from "../../islands/Sleep.tsx";
import ThirdParty from "../../islands/ThirdParty.tsx";

export default function Home() {
  return (
    <div class="grid justify-center m-10 grid-cols-1 gap-8 max-w-2xl w-full">
      <Channel />
      <ArrowControl />
      <ArrowPad />
      <ThirdParty />
      <Sleep />
    </div>
  );
}
