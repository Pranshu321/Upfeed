import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../Api/ContextApi";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "../Screens/TopNavigation";

export default function InshortTabs() {
    const layout = useWindowDimensions();

    const { index, setindex } = useContext(NewsContext);

    const [routes] = useState([
        { key: "first", title: "Discover" },
        { key: "second", title: "News" },
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setindex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={index} setIndex={setindex} />}
        />
    );
}