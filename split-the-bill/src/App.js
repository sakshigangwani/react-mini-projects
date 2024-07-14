import { useEffect, useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App(){
  const [addFriend, setAddFriend] = useState(false);

  function handleFriend() {
    if(!addFriend){
      setAddFriend(true);
    }else{
      setAddFriend(false);
    }
  }
  return <div className="app">
    <div className="sidebar">
      <Friends />
      {addFriend ? <FormAddFriend /> : null}
      <button onClick={handleFriend} className="button">Add Friend</button>
    </div>
    <FormSplitBill />
  </div>
}

function Friends(){
  const friends = initialFriends;
  return (
    <ul>{friends.map((friend) => (
      <Friend friend={friend} key={friend.id}/>
    ))}</ul>
  )
}

function Friend({friend}){
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>

      {friend.balance < 0 && <p className="red">You owe {friend.name} {Math.abs(friend.balance)}₹</p>}
      {friend.balance > 0 && <p className="green">{friend.name} owes you {Math.abs(friend.balance)}₹</p>}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <button className="button">Select</button>
    </li>
    
  )
}

function FormAddFriend() {
  
  return <form className="form-add-friend">
    <label>$ Friend Name</label>
    <input type="text"/>

    <label>* Image URL</label>
    <input type="text"/>

    <button className="button">Add</button>
  </form>
}

function FormSplitBill(){
  return <form className="form-split-bill">
    <h2>Split a bill with X</h2>
    <label>$ Bill value</label>
    <input type="text"/>
    <label>$ Your expenses</label>
    <input type="text"/>
    <label>$ X's expenses</label>
    <input type="text" disabled/>
    <label>$ Who is paying the bill</label>
    <select>
      <option value="user">You</option>
      <option value="friend">X</option>
    </select>
    <button className="button">Split Bill</button>
  </form>
}

export default App