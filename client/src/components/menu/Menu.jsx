
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import { useState } from "react";

const Menu = () =>{

    const [text, setText] = useState('');

    return (
    <>
    <Header/>
    <Search setText = {setText}/>
    <Conversations text = {text}/>
    </>);

}

export default Menu;