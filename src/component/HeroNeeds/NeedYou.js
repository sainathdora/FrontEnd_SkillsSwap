import ProfileCardNeeds from "./ProfileCardNeeds";
import dummydata from "../../assets/dummydata.json";
export default function NeedYou() {
  const people = dummydata["people"];
  console.log(dummydata);
  for (let i of dummydata.people) {
    console.log(i);
  }
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl p-4">People who might need your Services </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {dummydata.people.map(function (p, i) {
            return (
              <ProfileCardNeeds
                needs={p.needs}
                name={p.name}
                imgurl={p.imgurl}
                key={p.id}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
