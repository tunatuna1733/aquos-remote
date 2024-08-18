import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

type Props = {
  feature: string;
  args?: Record<string, string>;
  children: ComponentChildren;
};

const Remote = ({ feature, args, children }: Props) => {
  const params = args
    ? Object.entries(args).map(([k, v]) => `${k}=${v}`)
      .reduce((acc, curr) => acc + "&" + curr)
    : "";
  const url = `/api/aquos?feature=${feature}&${params}`;
  return (
    <div>
      <button
        onClick={() => {
          fetch(url);
        }}
        class="flex justify-center items-center size-16 rounded-lg bg-cyan-600 hover:bg-cyan-700 w-full"
      >
        <p class="text-white text-4xl">{children}</p>
      </button>
    </div>
  );
};

export default Remote;
