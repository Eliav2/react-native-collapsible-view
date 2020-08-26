import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, I18nManager, Animated, Easing } from "react-native";
import Collapsible from "react-native-collapsible";

export default ({
  children,
  title = "",
  initShow = false,
  unmountOnCollapse = true,
  isRTL = "auto",
  duration = 300,
  collapsibleProps = {},
  arrowSize = 24,
  noArrow = false,
  style = {},
}) => {
  const [show, setShow] = useState(initShow);
  const [mounted, setMounted] = useState(initShow);

  const handleAnimationEnd = () => {
    if (unmountOnCollapse && !show) setMounted(false);
  };

  const handleToggleShow = () => {
    if (!mounted) {
      if (!show) setMounted(true);
    } else {
      setShow(!show);
      handleArrowRotate();
    }
  };

  if (isRTL === "auto") isRTL = I18nManager.isRTL;
  const rotateAngle = ((isRTL ? 90 : -90) * 3.14159) / 180;
  const TitleElement = typeof title === "string" ? <Text style={styles.TitleText}>{title}</Text> : title;

  useEffect(() => {
    if (mounted) {
      setShow(true);
      handleArrowRotate();
    }
  }, [mounted]);

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const handleArrowRotate = () => {
    if (!show)
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    else {
      Animated.timing(rotateAnim, {
        toValue: rotateAngle,
        duration,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    rotateAnim.setValue(initShow ? 0 : rotateAngle);
  }, []);

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handleToggleShow}>
      <View
        style={{
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        {noArrow ? null : (
          <Animated.View style={{ transform: [{ rotate: rotateAnim }] }}>
            <Image style={{ width: arrowSize, height: arrowSize }} source={require("../assets/arrow-down.png")} />
          </Animated.View>
        )}
        {TitleElement}
      </View>
      {mounted ? (
        <View style={{ width: "100%" }}>
          <Collapsible onAnimationEnd={handleAnimationEnd} collapsed={!show} {...{ duration, collapsibleProps }}>
            {children}
          </Collapsible>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
  },
  TitleText: { color: "#3385ff", fontSize: 16, padding: 5 },
});
