import React from "react";

type CommitteeItem = {
  honorific: string;
  name: string;
  position: string;
  //The following are committee positions, with null, Chairperson, and Member
  auditCommittee?: string;
  compensationCommittee?: string;
  nominatingCommittee?: string;
};

const Committee: CommitteeItem[] = [
  {
    honorific: "Mr.",
    name: "Weilai Zhang",
    position: "Chairman",
  },
  {
    honorific: "Ms.",
    name: "Tingting Zhang",
    position: "Director & Corp. Secretary",
  },
  {
    honorific: "Mr.",
    name: "Ishak Han",
    position: "Independent Director",
    auditCommittee: "M",
    compensationCommittee: "M",
    nominatingCommittee: "M",
  },
  {
    honorific: "Ms.",
    name: "Huashu Yuan",
    position: "Independent Director",
    auditCommittee: "M",
    compensationCommittee: "C",
    nominatingCommittee: "C",
  },
  {
    honorific: "Mr.",
    name: "Song Chungen",
    position: "Independent Director",
    auditCommittee: "M",
    compensationCommittee: "M",
    nominatingCommittee: "M",
  },
  {
    honorific: "Mr.",   
    name: "Dian Zhang",
    position: "Independent Director",
    auditCommittee: "C",
    compensationCommittee: "M",
    nominatingCommittee: "M",
  },
  {
    honorific: "Mr.",
    name: "Houyou Zhang",
    position: "Director",
  },
  {
    honorific: "Mr.",
    name: "Junjie Dong",
    position: "Director",
  },
  {
    honorific: "Ms.",
    name: "Xiaoying Song",
    position: "Director",
  },
];
const CommitteeComposition = () => {
  const colorItem = (item: string | undefined) => {
    if (item === "M") {
      return "text-slate-500";
    }
    if (item === "C") {
      return "text-black-700";
    }
  };

  return (
    <table className="table-auto w-full">
      <thead className="bg-slate-400 text-white">
        <tr>
          <th className="font-semibold py-2">Director</th>
          <th className="font-semibold py-2">Position</th>
          <th className="font-semibold py-2">Audit Committee</th>
          <th className="font-semibold py-2">Compensation Committee</th>
          <th className="font-semibold py-2">Nominating Committee</th>
        </tr>
      </thead>
      <tbody>
        {Committee.map((item, index) => {
          const isEvenRow = (index + 1) % 2 === 0;
          const colorRow = isEvenRow ? "bg-slate-100" : "bg-white";

          return (
            <tr key={index} className={colorRow}>
              <td className="border h-10 px-4 py-2 text-center">
                {item.honorific} {item.name}
              </td>
              <td className="border h-10 px-4 py-2 text-center">
                {item.position}
              </td>
              <td className={`border h-10 px-4 py-2 text-center font-bold ${colorItem(item.auditCommittee)}`}>
                {item.auditCommittee}
              </td>
              <td className={`border h-10 px-4 py-2 text-center font-bold ${colorItem(item.compensationCommittee)}`}>
                {item.compensationCommittee}
              </td>
              <td className={`border h-10 px-4 py-2 text-center font-bold ${colorItem(item.nominatingCommittee)}`}>
                {item.nominatingCommittee}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CommitteeComposition;
