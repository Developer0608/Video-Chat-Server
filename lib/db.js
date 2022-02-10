class DB {
  constructor(){

    if(!DB.instance){
      this.producerList = [];
      this.ClientList = [];
      DB.instance = this;
    }

    return DB.instance;
  }

  addProducer = (name) => {
    return this.producerList.push(name);
  }

  addClientList = (name) => {
    return this.ClientList.push(name);
  }

  listProducers = () => {
    return this.producerList;
  }

  listClient = () => {
    return this.ClientList;
  }

  // findProducer = (name) => {
  //   console.log('PRODUCER NAME :::: ', name);


  // }

  findClient = () => {

  }
}

const DBConnection = new DB();
Object.freeze(DBConnection);

module.exports = {DBConnection};