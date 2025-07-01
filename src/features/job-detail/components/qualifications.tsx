type QualificationsProps = {
  data: string[];
};

export const Qualifications = (props: QualificationsProps) => {
  const { data } = props;
  return (
    <div className="flex flex-col gap-y-3">
      <div className="text-2xl font-bold text-black">Qualifications</div>

      <div className="flex flex-col gap-y-3">
        {data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};
