import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      // Access ref properties here. Safe because we checked for null
      console.log(myRef.current.someProperty);
    }
  }, [myRef.current]);

  return (
    <View>
      <Text ref={myRef}>This text has a ref</Text>
    </View>
  );
};

export default MyComponent;