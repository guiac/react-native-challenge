import React from 'react'
import { Paper, Subtitle, BodyText, Caption } from "material-bread";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import PropTypes from "prop-types";
import Utils from '../utils/utils';

const SIZE = 3;

const Block = ({el}) => {
    return(
        <Paper style={styles.container}>
            <BodyText style={styles.id}>{Utils.pad(el.attributes.index, SIZE)}</BodyText>
            <BodyText style={styles.description}>{el.attributes.data}</BodyText>
        </Paper>
    )
}

Block.propTypes = {
    el: PropTypes.shape({
        attributes: PropTypes.object,
        id: PropTypes.string,
      type: PropTypes.string,
    }).isRequired,
  };

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        padding: 10,
    },
    id: {
        color: colors.blue,
        fontSize: 10,
        lineHeight: 16,
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    description: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
    }
  });
export default Block;