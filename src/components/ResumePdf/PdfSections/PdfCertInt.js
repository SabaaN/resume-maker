import { Text, View } from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

function PdfCertInt({ certInt }) {
  return (
    <View>
      <View style={{...commonStyles.heading, display: 'flex', flexDirection: 'row', marginTop: '6px', fontSize: '13px'}}>
        { certInt.certification !== '' && <Text>VOLUNTEER EXPERIENCE</Text> }
      </View>
      <View style={commonStyles.normalTextLine}>
          <Text style={commonStyles.boldText}>IUGC Champions League Gaming Competition </Text>
          </View >
          <View style={commonStyles.normalTextLine}>
          <Text>{ certInt.certification }</Text>
        </View> 

       

      { certInt.skills !== '' && <View style={commonStyles.normalTextLine}>
          <Text style={commonStyles.boldText}>Skills: </Text>
          <Text>{ certInt.skills }</Text>
        </View> }
      { certInt.interests !== '' && <View style={commonStyles.normalTextLine}>
          <Text style={commonStyles.boldText}>Interests: </Text>
          <Text>{ certInt.interests }</Text>
        </View> }
    </View>
  );
}

export default PdfCertInt;
