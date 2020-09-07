# react-native-collapsible-view

_Animated collapsible view component for React Native based on [react-native-collapsible](https://github.com/oblador/react-native-collapsible)_

## Overview

A simple component of a common use case of collapsible - a visible title with a collapsible view beneath it.

#### main features

- Super simple API but fully customizable!
- Arrow animation indicating whether the collapsible is expanded or not.
- unmountOnCollapse property which unmount the collapsible when it is not expanded(very useful for performance! use wisely!).
- Support both RTL and LTR languages(if not specified, default direction based on the device language is chosen).
- State can be managed by other component(controlled) or independently(uncontrolled).
- Fully supported on Android, iOS and Web!

## Demo

### gif

![collapsible-view1 2](https://user-images.githubusercontent.com/47307889/92328604-8feb8d00-f06a-11ea-966d-f7d0e3b1a0d7.gif)

### Snack

play live on Snack!
https://snack.expo.io/@eliav2/react-native-collapsible-view

## Installation

```bash
$ npm install @eliav2/react-native-collapsible-view

// or with yarn
$ yarn add @eliav2/react-native-collapsible-view
```

## Simple Usage

```js
import React from "react";
import { Text } from "react-native";
import CollapsibleView from "@eliav2/react-native-collapsible-view";

export default () => {
  return (
    <CollapsibleView title="Simple Collapsible View">
      <Text>hey there!</Text>
    </CollapsibleView>
  );
};
```

## Properties

#### title

can be string, or jsx element. in case of string a default styling is chosen.
examples:

- `title={"Cool View"}`
- `title={<Text style={{ color: "red", fontSize: 36, fontStyle: "italic" }}>Custom Styling</Text>}`

default value: `title=''`

#### expanded

use this property to control the collapsible state by his parent(or some other component). if a value for expanded is given(true or false) - then his state is managed by his parent only(pressing on the collapsible directly will not toggle his state).
if given - the collapsible considered as `controlled`(by other component),if not, the collapsible is `uncontrolled`(default).
examples:

- `expanded={true}`

default value: `expanded = {null}`

#### initExpanded

if true then the collapsible will be expanded on mounting.
makes a difference only when uncontrolled.
examples:

- `initExpanded={true}`

default value: `initExpanded = {false}`

#### unmountOnCollapse

if true then the collapsible(beneath the title) will unmount when closing animation ends.
can be very useful when considering performance! use wisely!
examples:

- `unmountOnCollapse={true}`

default value: `unmountOnCollapse = {false}`

#### isRTL

can be true or false.
set `isRTL=true` is your language is arabic or hebrew(text writing direction is RTL).
if not specified, default direction based on the device language is chosen.
Note - if you specify direction, the component will force that direction, means that if you provided `isRTL=true` but device language is not RTL language then the flexDirection will be flipped from 'row' to 'row-reverse' so the view will look good.
examples:

- `isRTL={true}`

default value: `isRTL = "auto"`

#### duration

sets the animation duration of both collapsible element and the arrow rotation.
examples:

- `duration = 4000`

default value: `duration = {300}`

#### collapsibleProps

Object - This properties will be passed down to the [collapsible](https://github.com/oblador/react-native-collapsible) element.
[These are](https://github.com/oblador/react-native-collapsible#properties) the available properties.
examples:

- `collapsibleProps={{ onAnimationEnd: () => alert("animation ended") }}`

default value: `collapsibleProps = {{}}`

#### style

give custom style to the touchable containing the collapsible(the container).
examples:

- `style={{ borderWidth: 0, backgroundColor: "#6495ED" }}`

default value: `style={{}}`

#### activeOpacityFeedback

determines the opacity level with the touchable is clicked.
examples:

- `activeOpacityFeedback = {1}` will disable any feedback.

default value: `activeOpacityFeedback = {0.3}`

#### collapsibleContainerStyle

A styling for the container of the collapsible(the entire expandable view beneath the title).
can be useful in some cases, like implantation of pretty dropdown menu with absolute positioning(see example at the gif and snack demo above).
examples:

- ` collapsibleContainerStyle={{position: "absolute", top: "100%"}}`

default value: ` collapsibleContainerStyle={{}}`

#### arrowStyling

object with the optional following properties:

1. size {number} - how big the arrow will be.
2. thickness {number} - how thick the arrow will be.
3. color {string} - color of the arrow.
4. rounded {boolean} - make the corners of the arrow rounded or not.
5. polylineProps {object} - optional extra properties passed down to the react-native svg component drawing the arrow. can be used in advanced customization.
6. svgProps {object} - same as polylineProps but passed to the svg canvas. for 5-6 properties see [react-native-svg](<(https://github.com/react-native-community/react-native-svg)>).

examples:

- `arrowStyling={{ size: 72, rounded: true, thickness: 12, color: "purple" }}`
- `arrowStyling={{size: 72,thickness: 12,svgProps: { style: { backgroundColor: "yellow" } },polylineProps: { strokeLinejoin: "bevel" }}}`

default value: `arrowStyling={ size = 24,thickness = size / 16,color = "black",rounded = false,svgProps = {},polylineProps = {}}`

#### noArrow

if set to true the arrow indicating whether the collapsible-view is expanded or not will not be displayed.
examples:

- `noArrow = {true}`

default value: `noArrow = {false}`

#### `titleStyle` and `titleProps`

you can guess by the name. default value={}.

## Versions

- 1.0.0 - Initial release.
- 1.1.0 - added `collapsibleContainerStyle` property.
- 1.2.0 - now the arrow icon is SVG (and not a PNG file). this enhance performance and enables arrow customization. `arrowSize` property is now replaced with `arrowStyling`.
- 1.3.0 - now tested and fully supported on react-native web! in addition: `titleStyle` and `titleProps` properties added. `activeOpacityFeedback` property added.
