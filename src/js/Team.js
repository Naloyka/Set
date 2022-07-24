export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Игрок с таким именем уже существует');
    } else {
      this.members.add(person);
    }
  }

  addAll(...members) {
    for (const member of members) {
      this.members.add(member);
    }
  }

  toArray() {
    this.members = [...this.members];
  }
}
