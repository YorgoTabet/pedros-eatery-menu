import { ReactNode, useMemo  } from "react";
import { primaryColor } from "../../Constants/Colors";

interface AppTextProps {
    content?: string;
    color?: string;
    fontSize?: string;
    fontFamily?: "playfairDisplay" | "brittany" | "hkGrotesk" | "quicksand" | "playfairDisplayBold" | "hkGroteskBold" | "quicksandBold"  ;
    fontWeight?: string;
    classes?: string,
    styles?: React.CSSProperties;
    children?: ReactNode
    
}

const AppText = ({content, fontSize, fontWeight, styles={}, fontFamily= "brittany", color = primaryColor, classes = "", children}: AppTextProps) => {

    const textStyles: React.CSSProperties | undefined = useMemo(()=> {
        return {
            margin: 0,
            content,
            color,
            fontWeight,
            fontSize,
            fontFamily,
            ...styles
        }
    }, [content, color, fontWeight, fontSize, fontFamily, styles]) 

return <p style={textStyles} className={`${classes}`} >{content ?? children}</p>
}

export default AppText