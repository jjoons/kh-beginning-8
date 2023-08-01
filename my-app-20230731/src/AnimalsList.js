function Animal({ animal }) {
  return (
    <div>
      <p>{animal.name}</p>
      <p>{animal.age}</p>
    </div>
  );
}

function AnimalsList() {
  const animals = [
    {
      id: 1,
      name: "Donkey",
      age: 1,
      gender: "M",
    },
    {
      id: 2,
      name: "Dog",
      age: 10,
      gender: "F",
    },
  ];

  return (
    <div>
      <p>동물 이름</p>
      <Animal animal={animals[0]} />
      <br />
      <Animal animal={animals[1]} />
    </div>
  );
}

export default AnimalsList;
