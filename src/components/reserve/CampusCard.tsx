import { ImageBackground, Platform, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import CustomText from "../common/CustomText";
import useThemeStore, { ThemeProp } from "@/stores/themeStore";
import { useMemo } from "react";
import responsive from "@/utils/responsive";

interface CampusCardProps {
    image: any;
    name: string;
    onPress: () => void;
}
const CampusCard = ({ image, name, onPress }: CampusCardProps) => {
    const theme = useThemeStore(s => s.theme);
    const styles = useMemo(() => customStyle(theme), [theme]);

    return (
        <Pressable
            style={styles.card}
            onPress={onPress}
        >
            <ImageBackground
                source={image}
                style={styles.backImgStyle}
                imageStyle={styles.backImg}
            >
                {/* <LinearGradient
                    colors={['black', 'rgba(255,255,255,0)']}
                    style={{ zIndex: 101, height: '100%' }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 100 / 2 }}
                /> */}
                <CustomText
                    variant='primary'
                    weight='bold'
                    type='body'
                    style={styles.cardText}
                >
                    {name}
                </CustomText>
            </ImageBackground>
        </Pressable>
    );
};

const customStyle = (theme: ThemeProp) => {
    return StyleSheet.create({

        backImg: {
            width: responsive(150),
            height: responsive(150),
            borderRadius: responsive(8)
        },
        backImgStyle: {
            height: '100%',
            opacity: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            width: responsive(150),
            height: responsive(150),
            borderRadius: responsive(8),
            overflow: 'hidden',
            ...Platform.select({
                ios: {
                    shadowColor: "#3C4043",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 8,
                },
                android: {
                    elevation: 5,
                }
            })
        },
        cardText: {
            color: 'white',
            textAlign: 'center',
        }
    });
};

export default CampusCard;