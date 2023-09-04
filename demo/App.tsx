import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";

import CollapsibleView from "@eliav2/react-native-collapsible-view";

export default function Example() {
  const [controlledValue, setControlledValue] = useState(false);
  return (
    <View style={{ height: "100%", justifyContent: "center" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <CollapsibleView title="Basic Usage">
            <Text style={styles.descriptionText}>I am the root collapsible</Text>
            <CollapsibleView title={"Initially Expanded"} initExpanded>
              <Text>I am opened by default because of initExpanded property set to true</Text>
            </CollapsibleView>
            <CollapsibleView title="Nesting">
              <Text>I will contain some nested collapsible</Text>
              <CollapsibleView title="Nested 1">
                <Text>nothing here</Text>
              </CollapsibleView>
              <CollapsibleView title="Nested 2">
                <Text>nothing here either</Text>
              </CollapsibleView>
            </CollapsibleView>
            <CollapsibleView
              title={
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Button title="Cool button" />
                  <Text> Some custom title element</Text>
                </View>
              }
            >
              <Text>nothing intersting here</Text>
            </CollapsibleView>
            <CollapsibleView title="unmountOnCollapse" unmountOnCollapse>
              <Text>
                this collapsible will unmount when collapse animation will end. can be very usefull when rendering a lot
                of exepnsive collapsible elements.
              </Text>
            </CollapsibleView>
            <CollapsibleView title="RTL language" isRTL>
              <Text>השפה כאן מוגדרת כשפה מימין לשמאל</Text>
            </CollapsibleView>
            <CollapsibleView title="Slow Animation" duration={2000}>
              <Text>some very slow animation</Text>
            </CollapsibleView>
          </CollapsibleView>
          <CollapsibleView title="Custom Usage">
            <CollapsibleView
              title={<Text style={{ color: "red", fontSize: 36, fontStyle: "italic" }}>Custom Styling</Text>}
              style={{ borderWidth: 0, backgroundColor: "#6495ED" }}
              arrowStyling={{
                size: 72,
                rounded: true,
                thickness: 12,
                color: "purple",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                whipeeeeeeeeeeeeeeeeeeeeeeeeee
              </Text>
            </CollapsibleView>
            <CollapsibleView
              title="Dropdown Styling"
              collapsibleContainerStyle={{
                position: "absolute",
                backgroundColor: "black",
                alignItems: "center",
                width: "50%",
                top: "100%",
                borderRadius: 20,
              }}
              collapsibleProps={{
                style: { padding: 10 },
              }}
              style={{ borderWidth: 0, zIndex: 3 }}
            >
              <Text style={{ color: "white" }}>
                {"Hey look it me!\nI'm look like a custom dropdown!\nI'm using collapsibleContainerStyle property"}
              </Text>
            </CollapsibleView>
            <CollapsibleView
              initExpanded
              title={
                <View>
                  <Text style={{ color: "blue" }}>Controlled Collapsible</Text>
                  <Button title="Toggle child" onPress={() => setControlledValue(!controlledValue)} />
                </View>
              }
            >
              <Text>this collapsible is controlled by parent and his state his managed by him.</Text>
              <CollapsibleView title="child" expanded={controlledValue}>
                <Text>{"hey\nhey\nhey\nhey\nhey\n"}</Text>
              </CollapsibleView>
            </CollapsibleView>
            <CollapsibleView
              title="Pass props"
              collapsibleProps={{
                onAnimationEnd: () => alert("animation ended"),
              }}
            >
              <Text>when animation ends alert will be shown</Text>
            </CollapsibleView>
          </CollapsibleView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
  descriptionText: { textAlign: "center" },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app! asd assssd111w22aaa asdsad zzzz</Text>
//       <StatusBar style="auto" />
//       <CollapsibleView title="Basic Usage">
//         <Text>I am the root collapsible</Text>
//         <CollapsibleView title={"Initially Expanded"} initExpanded>
//           <Text>I am opened by default because of initExpanded property set to true</Text>
//         </CollapsibleView>
//       </CollapsibleView>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
