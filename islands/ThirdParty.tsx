import Remote from "../components/Remote.tsx";

const ThirdParty = () => {
  return (
    <div class="grid grid-cols-4 gap-x-8 w-full">
      <Remote feature="third-party" args={{ service: "netflix" }}>
        Netflix
      </Remote>
      <Remote feature="third-party" args={{ service: "youtube" }}>
        Youtube
      </Remote>
      <Remote feature="third-party" args={{ service: "u-next" }}>U-NEXT</Remote>
      <Remote feature="third-party" args={{ service: "prime" }}>Prime</Remote>
    </div>
  );
};

export default ThirdParty;
