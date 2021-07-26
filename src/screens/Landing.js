import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const StyledButton = styled(TouchableOpacity)`
  background-color: #e8006f;

  width: 326px;
  height: 64px;

  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;

const ButtonContainer = styled(View)`
  margin-top: 60px;
`;

const TransparentButton = styled(TouchableOpacity)`
  width: 326px;
  height: 64px;

  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Landing = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../images/gradient.png')}>
        <Image source={require('../images/uniswap_logo.png')} />
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          Buy, swap, and send crypto tokens.
        </Text>
        <ButtonContainer>
          <StyledButton>
            <ButtonText>Get started with a new wallet</ButtonText>
          </StyledButton>
        </ButtonContainer>
        <TransparentButton>
          <ButtonText
            style={{
              color: '#e8006f',
            }}>
            Get started with a new wallet
          </ButtonText>
        </TransparentButton>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    width: '60%',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Landing;
