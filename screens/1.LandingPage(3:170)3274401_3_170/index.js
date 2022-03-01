import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_3_171}>
        <View style={styles.View_3_172} />
        <View style={styles.View_3_173} />
      </View>
      <View style={styles.View_3_174}>
        <View style={styles.View_3_175} />
        <View style={styles.View_3_176} />
      </View>
      <View style={styles.View_3_177}>
        <Text style={styles.Text_3_177}>01</Text>
      </View>
      <View style={styles.View_3_178}>
        <Text style={styles.Text_3_178}>02</Text>
      </View>
      <View style={styles.View_3_179}>
        <Text style={styles.Text_3_179}>03</Text>
      </View>
      <View style={styles.View_3_180}>
        <Text style={styles.Text_3_180}>04</Text>
      </View>
      <View style={styles.View_3_181}>
        <Text style={styles.Text_3_181}>05</Text>
      </View>
      <View style={styles.View_3_182}>
        <Text style={styles.Text_3_182}>The HOM-NFT Minting App</Text>
      </View>
      <View style={styles.View_3_183}>
        <Text style={styles.Text_3_183}>How it works</Text>
      </View>
      <View style={styles.View_3_184}>
        <Text style={styles.Text_3_184}>
          The HOM-NFT Minting app will provide an easy way to turn any property
          into a NFT, and then bond it for HOM tokens and earn passive income
          from staking. Contributions to HOM DAO are used to fund the
          development of this innovative new crypto platform.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3403/373c/c4e75b57d5eef33e3d2a3dda3dc0c440"
        }}
        style={styles.ImageBackground_3_185}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ad9/e666/27f0415022f2c9c2bc81cfc926813ef7"
        }}
        style={styles.ImageBackground_3_186}
      />
      <View style={styles.View_3_187}>
        <Text style={styles.Text_3_187}>
          5 reasons why you&#39;ll want to make a HOM-NFT of your property.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1429/232a/0470c29286253bf6ec26b1061fc3eba8"
        }}
        style={styles.ImageBackground_3_188}
      />
      <View style={styles.View_3_189}>
        <View style={styles.View_3_190}>
          <Text style={styles.Text_3_190}>Log In</Text>
        </View>
        <View style={styles.View_3_191}>
          <Text style={styles.Text_3_191}>Sign Up</Text>
        </View>
        <View style={styles.View_3_192} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc9e/d706/dabcc56b30038f7fec0516b6e00a85d5"
          }}
          style={styles.ImageBackground_3_193}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/146f/e636/f009e75187485c77e3bd353d72a74193"
        }}
        style={styles.ImageBackground_3_194}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641f/cbe0/ca5763bb97695feff23baa6937e7d2c7"
        }}
        style={styles.ImageBackground_3_195}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db41/36f9/6228cb3e8cae92b5ac72fc16f69e1785"
        }}
        style={styles.ImageBackground_3_196}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0454/9c00/168c9606070e5c0a5fcf39fa9274b6b2"
        }}
        style={styles.ImageBackground_3_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25ac/44d2/866098b66dbdfc274976b5fe72f01d3d"
        }}
        style={styles.ImageBackground_3_198}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54cb/c39f/6818ec0e0e5d80984e9bc97c758ec121"
        }}
        style={styles.ImageBackground_3_199}
      />
      <View style={styles.View_3_200}>
        <Text style={styles.Text_3_200}>
          Step 1: Register with the DAO Register with the HOM-NFT minting system
          and provide proof that you own the property. If you own pHOM or HOM
          tokens, it&#39;s free to use the system.
        </Text>
      </View>
      <View style={styles.View_3_201}>
        <Text style={styles.Text_3_201}>
          Step 2: Upload the Meta-Data Next, enter all the information about
          your property. This “meta-data” is the key to your HOM-NFT. In some
          places HOM DAO may already have complied the meta-data for the
          property.{" "}
        </Text>
      </View>
      <View style={styles.View_3_202}>
        <Text style={styles.Text_3_202}>
          Step 3: Mint your HOM-NFT Once the meta-data is collected, minting
          your HOM-NFT takes seconds. HOM AI bots ensure your NFT meta-data
          remains up to date and is powered with the latest market data and
          trends.{" "}
        </Text>
      </View>
      <View style={styles.View_3_203}>
        <Text style={styles.Text_3_203}>
          Bond your HOM-NFT and receive HOM tokens in return
        </Text>
      </View>
      <View style={styles.View_3_204}>
        <Text style={styles.Text_3_204}>
          Stake your HOM tokens to generate passive income
        </Text>
      </View>
      <View style={styles.View_3_205}>
        <Text style={styles.Text_3_205}>Rent your property for crypto</Text>
      </View>
      <View style={styles.View_3_206}>
        <Text style={styles.Text_3_206}>
          Sell your property without the hassle, even in little pieces
        </Text>
      </View>
      <View style={styles.View_3_207}>
        <Text style={styles.Text_3_207}>Double your passive income</Text>
      </View>
      <View style={styles.View_3_208}>
        <Text style={styles.Text_3_208}>
          Bonding a HOM-NFT is the same idea as bonding crypto, but using real
          estate instead.. You may bond your HOM-NFT and get up to 110% of the
          value of your property in HOM tokens, depending upon the eco-rating of
          the property.
        </Text>
      </View>
      <View style={styles.View_3_209}>
        <Text style={styles.Text_3_209}>
          Once you’ve bonded the HOM-NFT, you can do what you want with your HOM
          tokens, including staking your HOM tokens to earn passive income. The
          smart move is to use the staking awards to pay off your HOM bond early
          and keep the rest to do with as you please.
        </Text>
      </View>
      <View style={styles.View_3_210}>
        <Text style={styles.Text_3_210}>
          Rent out your property without any complicated contracts: Each HOM-NFT
          contains 365 day-NFT’s, one for every day of the year. Sell the
          day-NFT’s to people who want to use your property on those days. When
          they stay at your property the day-NFT is used up. It&#39;s all paid
          for with crypto. Simple.
        </Text>
      </View>
      <View style={styles.View_3_211}>
        <Text style={styles.Text_3_211}>
          Once a property becomes a HOM-NFT, you can create a legal entity
          within the NFT that makes it easy to buy and sell the property, just
          like trading crypto. You can even sell fractions of the HOM-NFT to
          lots of people in exchange for HOM tokens. This way, those who had
          never before had the chance to participate in real-estate ownership,
          can join in.{" "}
        </Text>
      </View>
      <View style={styles.View_3_212}>
        <Text style={styles.Text_3_212}>
          With the HOM-NFT you can rent your property and bond-stake your HOM-
          NFT at the same time, generating two streams of revenue instead of
          just one. It’s like passive income with superpowers!
        </Text>
      </View>
      <View style={styles.View_3_213}>
        <Text style={styles.Text_3_213}>Mint and bond an NFT</Text>
      </View>
      <View style={styles.View_3_214}>
        <Text style={styles.Text_3_214}>Stake HOM to earn yield</Text>
      </View>
      <View style={styles.View_3_215}>
        <Text style={styles.Text_3_215}>
          HOM DAO’s goal is to provide keys for you to build wealth, buy
          property, and generate passive income. Our community’s mission is to
          help provide access to safe, sustainable housing for everyone,
          everywhere.
        </Text>
      </View>
      <View style={styles.View_3_216}>
        <Text style={styles.Text_3_216}>Contact Us</Text>
      </View>
      <View style={styles.View_3_217}>
        <Text style={styles.Text_3_217}>Terms and Conditions</Text>
      </View>
      <View style={styles.View_3_218}>
        <Text style={styles.Text_3_218}>Privacy Policy</Text>
      </View>
      <View style={styles.View_3_219}>
        <View style={styles.View_I3_219_3_122}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf0/410a/d5476600220b300c5f9dfbd0709afda5"
            }}
            style={styles.ImageBackground_I3_219_3_123}
          />
        </View>
      </View>
      <View style={styles.View_3_220}>
        <View style={styles.View_I3_220_3_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd81/a415/f054ea1b3a4f8ef584f6880682768d7d"
            }}
            style={styles.ImageBackground_I3_220_3_128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d67/84f8/40e4949dfc652374a54d6bd2ca824d5c"
            }}
            style={styles.ImageBackground_I3_220_3_131}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3447/4397/3b7831932e7e05e85eaf9d416dc687ee"
            }}
            style={styles.ImageBackground_I3_220_3_135}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43dd/9fd7/fab81ef18eca11e538a386d95805d9aa"
        }}
        style={styles.ImageBackground_3_221}
      />
      <View style={styles.View_3_224}>
        <View style={styles.View_I3_224_3_140}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d91/b91d/dcc2d2b5038022efa4244cceffaf8c9a"
            }}
            style={styles.ImageBackground_I3_224_3_141}
          />
        </View>
      </View>
      <View style={styles.View_3_225}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd92/0c02/19caa1f5d0b9fe0d2099e16154c8b8f7"
          }}
          style={styles.ImageBackground_3_226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa2/1db3/6c51693d0fb667d7e9ef7d6f5d74a007"
          }}
          style={styles.ImageBackground_3_227}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("153%") },
  View_3_171: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("133%"),
    minHeight: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("140%")
  },
  View_3_172: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_3_173: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_3_174: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("200%"),
    minHeight: hp("200%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("364%")
  },
  View_3_175: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_3_176: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("167%"),
    minHeight: hp("167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_3_177: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("407%"),
    justifyContent: "flex-start"
  },
  Text_3_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_178: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("438%"),
    justifyContent: "flex-start"
  },
  Text_3_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_179: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("470%"),
    justifyContent: "flex-start"
  },
  Text_3_179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_180: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("501%"),
    justifyContent: "flex-start"
  },
  Text_3_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_181: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("533%"),
    justifyContent: "flex-start"
  },
  Text_3_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_182: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_3_182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_183: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("152%"),
    justifyContent: "flex-start"
  },
  Text_3_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.8,
    textTransform: "none"
  },
  View_3_184: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_3_184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_185: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("87%")
  },
  ImageBackground_3_186: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("273%")
  },
  View_3_187: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("372%"),
    justifyContent: "flex-start"
  },
  Text_3_187: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_188: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("40%")
  },
  View_3_189: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%")
  },
  View_3_190: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_3_190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_191: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_3_191: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_192: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("3%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_3_193: {
    width: wp("6%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_194: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("185%")
  },
  ImageBackground_3_195: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("176%")
  },
  ImageBackground_3_196: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("185%")
  },
  ImageBackground_3_197: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("176%")
  },
  ImageBackground_3_198: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("184%")
  },
  ImageBackground_3_199: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("176%")
  },
  View_3_200: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("228%"),
    justifyContent: "flex-start"
  },
  Text_3_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_201: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("228%"),
    justifyContent: "flex-start"
  },
  Text_3_201: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_202: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("228%"),
    justifyContent: "flex-start"
  },
  Text_3_202: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_203: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("408%"),
    justifyContent: "flex-start"
  },
  Text_3_203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_204: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("440%"),
    justifyContent: "flex-start"
  },
  Text_3_204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_205: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("471%"),
    justifyContent: "flex-start"
  },
  Text_3_205: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_206: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("503%"),
    justifyContent: "flex-start"
  },
  Text_3_206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_207: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("534%"),
    justifyContent: "flex-start"
  },
  Text_3_207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_208: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("416%"),
    justifyContent: "flex-start"
  },
  Text_3_208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_209: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("448%"),
    justifyContent: "flex-start"
  },
  Text_3_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_210: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("480%"),
    justifyContent: "flex-start"
  },
  Text_3_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_211: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("511%"),
    justifyContent: "flex-start"
  },
  Text_3_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_212: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("543%"),
    justifyContent: "flex-start"
  },
  Text_3_212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_213: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_3_213: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_214: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("127%"),
    justifyContent: "flex-start"
  },
  Text_3_214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_215: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_3_215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_3_216: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("581%"),
    justifyContent: "flex-start"
  },
  Text_3_216: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_217: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("581%"),
    justifyContent: "flex-start"
  },
  Text_3_217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_218: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("581%"),
    justifyContent: "flex-start"
  },
  Text_3_218: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_219: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("580%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_219_3_122: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_219_3_123: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_220: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("580%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_220_3_127: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_220_3_128: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3_220_3_131: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I3_220_3_135: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_3_221: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("580%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_3_224: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("580%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_224_3_140: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_224_3_141: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_225: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("580%")
  },
  ImageBackground_3_226: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3_227: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
