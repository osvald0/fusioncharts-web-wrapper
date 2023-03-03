# fusioncharts wrapper

I've been using the [fusioncharts react-native library](https://github.com/fusioncharts/react-native-fusioncharts) for a while.
The experice with it isn't so good. There are high proprity issues with more than two years open, for exmaple [this](https://github.com/fusioncharts/react-native-fusioncharts/issues/123). We are paying for a license and the custom support is bad too.
To be honest it looks like the problem is only with the react-native version because the web version works so much better.
To workarround this problem one of the options we managed was to make a web available only to "host" the charts.
And that is the reason of this project.

## Getting Started

### Install Bun

```
curl -fsSL https://bun.sh/install | bash
```

### Clone the repo

```
git@github.com:osvald0/osvaldo-web-bun.git
```

### Development

```
bun dev
```

Open http://localhost:3000 with your browser to see the result.

### Production

Build

```
bun run build
```

Run

```
bun start
```

## Usage

This is an example of how to use it from the react native project.

```
import React from 'react';
import WebView from 'react-native-webview';
import { StyleSheet, View } from 'react-native';

const FusionCharts = ({ chartConfig }) => {
  const encodedConfig = encodeURI(JSON.stringify(chartConfig));

  return (
    <View style={styles.chartContainer}>
      <WebView
        source={{
          uri: `http://my_web_url.com?chart=${encodedConfig}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    height: 400,
    width: '100%',
  },
});

export default FusionCharts;
```

## Project enhancement

- [ ] Improve security.
- [ ] Add unit tests.
- [ ] Improve deployment.
- [ ] ...

## Learn More

To learn more about Bun, take a look at the [project documentation](https://bun.sh/).
