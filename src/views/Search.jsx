

import { Tabs } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { UserCard } from '../components/generalComponent/UserCard';
import Header from '../components/Header';
import { getPostSearchData, getSearchData, getUserSearchData } from '../Reducers/SearchReducer';


function Search() {
 const { userSearchData, postSearchData,search } = useSelector((state) => state.SearchData);
 const dispatch = useDispatch();

  //  const [search, setSearch] = useState();
 useEffect(()=>{
  console.log(search);
   dispatch(getSearchData());
   dispatch(getUserSearchData(search));
   dispatch(getPostSearchData(search));
},[search])
    return (
      <>
      <Header/>
<Tabs.Group
  aria-label="Tabs with underline"
  style="underline"
  className='justify-center'
>
  <Tabs.Item title="Profile"> 
   <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 cover:gap-4  cover:grid-cols-1 cover:m-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

  {postSearchData?.map((ele)=>{
    return (
  <Card key={ele.post_id} cards={ele} />
      )
  })} </div>
  </Tabs.Item>
  <Tabs.Item
    active={true}
    title="Dashboard"
  > 
  <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 cover:gap-3  cover:grid-cols-1 cover:m-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">

  {
  
  userSearchData?.map((ele)=>{
    return (

<UserCard key={ele.user_id} info={ele}/>

      )
  })}
  </div>
  </Tabs.Item>


</Tabs.Group></>
      );
}

export default Search;