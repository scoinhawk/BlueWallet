import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const ButtonStyle = { default: 'default', destroy: 'destroy' };
const Button = props => {
  const { onPress, text = '', disabled = false, buttonStyle = ButtonStyle.default } = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.buttonContainer, buttonStyle === ButtonStyle.default ? styles.buttonDefault : styles.buttonDestroy]}>
        <Text style={[styles.text, buttonStyle === ButtonStyle.default ? styles.textDefault : styles.textDestroy]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 9,
    minHeight: 49,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'auto',
    flexGrow: 1,
    marginHorizontal: 4,
  },
  buttonDefault: {
    backgroundColor: '#EBF2FB',
  },
  buttonDestroy: {
    backgroundColor: '#FFF5F5',
  },
  text: {
    fontWeight: 'bold',
  },
  textDefault: {
    color: '#1961B9',
  },
  textDestroy: {
    color: '#D0021B',
  },
});

export default Button;
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.string,
};
