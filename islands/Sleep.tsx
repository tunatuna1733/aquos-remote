import Remote from "../components/Remote.tsx";

const Sleep = () => {
  return (
    <div class="grid grid-cols-5 gap-x-8 w-full">
      <Remote feature="sleep" args={{ service: "off" }}>
        off
      </Remote>
      <Remote feature="sleep" args={{ service: "30" }}>
        30
      </Remote>
      <Remote feature="sleep" args={{ service: "60" }}>60</Remote>
      <Remote feature="sleep" args={{ service: "90" }}>90</Remote>
      <Remote feature="sleep" args={{ service: "120" }}>120</Remote>
    </div>
  );
};

export default Sleep;
