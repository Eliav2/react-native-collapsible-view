# react-native-collapsible-view

<!-- _Animated collapsible component for React Native using the Animated API_ -->

_Animated collapsible view component for React Native based on [react-native-collapsible](https://github.com/oblador/react-native-collapsible)_

## Overview

A simple component of a common use case of collapsible - a visible title with a collapsible view beneath it.

#### main features

- arrow animation indicating whether the collapsible is expanded or not.
- unmountOnCollapse property which unmount the collapsible when it is not expanded(can be very useful when considering performance of a page with multiple collapsible views).
- support both RTL and LTR languages(if not specified, default direction based on the device language is chosen).
- supported both on Android and iOS.

## Demo

### gif

![collapsible-view](https://user-images.githubusercontent.com/47307889/90984281-9d8a1880-e57c-11ea-9c59-bba46df80f90.gif)

### Snack

play live on Snack!
https://snack.expo.io/@eliav2/78bcb7

## Installation

```bash
$ npm install @eliav2/react-native-expandable-view

// or with yarn
$ yarn add @eliav2/react-native-expandable-view
```

## Simple Usage

```js
import React from "react";
import { Text } from "react-native";
import CollapsibleView from "@eliav2/react-native-expandable-view";

export default () => {
  return (
    <CollapsibleView title="Simple collapsible">
      <Text>hey there!</Text>
    </CollapsibleView>
  );
};
```

## Properties

##### title

can be string, or jsx element. in case of string a default styling is chosen.
examples:

- `title={"Cool View"}`
- `title={<Text style={{ color: "red", fontSize: 36, fontStyle: "italic" }}>Custom Styling</Text>}`

default value: `title=''`

##### initShow

if true then the collapsible will be expanded on mounting.
examples:

- `initShow={true}`

default value: `initShow = false`

##### unmountOnCollapse

if true then the collapsible will unmount when collapse animation ends.
examples:

- `unmountOnCollapse={true}`

default value: `unmountOnCollapse = true`

##### isRTL

can be true or false.
set `isRTL=true` is your language is arabic or hebrew(text writing direction is RTL).
if not specified, default direction based on the device language is chosen
examples:

- `isRTL={true}`

default value: `isRTL = "auto"`

##### duration

sets the animation duration of both collapsible element and the arrow rotation.
examples:

- `duration = 4000`

default value: `duration = 300`

##### collapsibleProps = {}

This properties will be passed down to the [collapsible](https://github.com/oblador/react-native-collapsible) elements.
[these are](https://github.com/oblador/react-native-collapsible#properties) the available properties.
examples:

- `duration = 4000`

##### arrowSize = 24

##### noArrow = false

##### style = {}
