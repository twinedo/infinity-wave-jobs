type ResponsibilitiesProps = {
  data: string[];
};

export const Responsibilities = (props: ResponsibilitiesProps) => {
  const { data } = props;

  return (
    <div className="flex flex-col gap-y-3">
      <div className="text-2xl font-bold text-black">Responsibilities</div>
      <div className="flex flex-col gap-y-3">
        {data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};
