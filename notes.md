- dynamically add data to components : props
- props are normal arguments to a function
- like passing an argument to a function

- <ResturantCard resName="meghana foods" 
        cusinie="biryani north indian"
   />

- and this props is passed to the function in a object

- props{
    resName:"meghana foods",
    cusinine:"biryani north indian"
}

- config driven UI
- controlling your ui using data or config
- config comes from backend
- corousel/resturant-card is diff for delhi , mumbai etc

- React uses key attribute to track the changes in the list.

- dont use index for keys(will work but is not recommended)
- not using key(not acceptable) <<< index as key <<< unique id(Best pracitse)


# Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - create a slice(cart slice)
    - dispatch(action)
    - read data using Selector(subscribing to the part of a store)