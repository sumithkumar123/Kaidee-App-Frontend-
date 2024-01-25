import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, StyleSheet, View, Dimensions } from "react-native";

const LawyerCarousel = () => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval;

    const scrollNext = () => {
      const nextIndex = Math.min(activeIndex + 1, carouselData.length - 1);
      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    };

    interval = setInterval(scrollNext, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const carouselData = [
    { id: "01", image: require("../assets/assets/images1.jpg") },
    { id: "02", image: require("../assets/assets/images2.jpg") },
    { id: "03", image: require("../assets/assets/images3.jpg") },
  ];

  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} style={{ height: screenHeight * 0.3, width: screenWidth }} />
    </View>
  );

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  const renderDotIndicators = () => (
    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: screenHeight * 0.03 }}>
      {carouselData.map((dot, index) => (
        <View
          key={index}
          style={{
            backgroundColor: activeIndex === index ? "green" : "red",
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        ></View>
      ))}
    </View>
  );

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
      />

      {renderDotIndicators()}
    </View>
  );
};

export default LawyerCarousel;

const styles = StyleSheet.create({});