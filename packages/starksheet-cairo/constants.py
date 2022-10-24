import json
import os
from pathlib import Path

from dotenv import load_dotenv
from starkware.starknet.wallets.account import DEFAULT_ACCOUNT_DIR

load_dotenv()

NETWORK = os.getenv("STARKNET_NETWORK", "alpha-goerli")
CONTRACTS = {p.stem: p for p in list(Path("contracts").glob("**/*.cairo"))}

ACCOUNTS = json.load(
    open(list(Path(DEFAULT_ACCOUNT_DIR).expanduser().glob("*.json"))[0])
)[NETWORK]

OWNER = int(ACCOUNTS["starksheet"]["address"], 16)
N_COLS = 15
N_ROWS = 15

ALLOW_LIST = [
    OWNER,
    *[
        int(address, 16)
        for address in [
            "0x00140440374ca75f0732670014042D2645F637356A34d16c2F44955ea7941d3D",
            "0x007506de8FAfC710eCff05A5A59E5f0bbA86fb194CA96648314fC3BCe9ffCd56",
            "0x007eDc3D948BF1bE9bdec7582b0bffE85d6a5d101Ab408807e5B75f27f257882",
            "0x00DEB3050ffB0fA2C7367d3Cab1c8D4e28104A51e131076028B702d279bdaEa2",
            "0x00fe0aFdb7Bd9c314822F714Aee41598882dABDEF3bF9226D56FC0F92A7b2fD1",
            "0x01002bFe4D330AeEe10d35205bDf4db5F25a779271F07c4bAf51c9EFc87769CD",
            "0x010031c9FB2668771B114805bF6f210E631D4F67C038912281D9E1EF5484F5CF",
            "0x0115ff62323D7a7C7035963EAb3C8396944334B26495244B67e9F8413b97a1cF",
            "0x012deb3c48c50cDC5443f21Ad518cb16d4fE80FdDF029a090609239A0FD902d7",
            "0x0161a9bCa8dcc5975A03b12f5F7BF9610e1541635eb40eb3A89bAeEdc168e636",
            "0x0172bA0AcF340A7ea757e40217E843759EEe6D53a6c7f67E6E967bb4D49be469",
            "0x01EA76d8967B444c2eb9B89c4123568CA4087C316B104c3339d7613116292374",
            "0x02041223a611Ae7d30C26fe9707D36fB7494219E87C6d0dB9c7DCFA36A4A255A",
            "0x020918c70E1dfb7E3Cd6811A37f9B027c4883dDa8123cccd1E3e3B252C2Cc2D2",
            "0x0228c6594B25E7c93Fb4f82f6D049E495b588279ce3d4f50b71d724a2bb75Ee7",
            "0x027D6aeFf1aBA4377165A2B210C072e96Dce1DD0ab71668a580ca4a9EE5433Ff",
            "0x028F7ca787A9502C4475889649A2De03094e263cBde2D53bFceF816B6617210c",
            "0x02a1eC511Dbced8D34997fbaDfcB72e173910CA00901ee123eEf6a0548EC5E66",
            "0x02d4E16CcbbB0F1A2dcb105ea1650bA21f39424F5E8CC7Df178D332A59EEcEf9",
            "0x030Bc99341266f72B9BB2aF77a949e5E995cDc9aEE00479bd19C56234fa00A6C",
            "0x03299DBe2c836a92689f78D97d94156bb183a406C2B7Dfc084e0d7E55126d564",
            "0x0360c4f27BD9AF2A05B416ff573738E8587883862a90965A1716Dfa9D17F3e79",
            "0x0367c0c4603a29Bc5aCA8E07C6A2776D7C0d325945aBB4f772f448b345Ca4Cf7",
            "0x03766dccE98c89Acf3A9F14F8F5406aae6f04E0c570a759Dc4Df7d59A6B3eD34",
            "0x0378529943acD450c6b0c549821c799725E83EB08579AAfC885D923527C3C10E",
            "0x038775a408D0D3EB9f6B78FD3fb23932caD69a466aFd2a06d982D7C8A1F23cb9",
            "0x038d9bAe3A0DaBa89843dDDA6a58300Fbc89CA8E850b623090e230e4D9277106",
            "0x03BC4F3912468951B3Be911B9476177cc208DaE52Ae4f880540F4d24d3C61847",
            "0x03cb1c6873766ce2be9fbf4ebd1effe0307be72f8deb02e9f222df7264be286c",
            "0x03EC19aB941eAb03Db17BEE98ab73caFB96f3Bc3753980291d5Be3106911C1Ad",
            "0x03fB57ea6C31c3e8c7815c4B7F038ac031763262c705C55734fddc9f76e324E8",
            "0x0404756B85a9398366b144484b58DA2a7798B4ba74bDaF42DB376358093586E0",
            "0x0445F2E3F457c9b485c747Ac45Aed7bEF2EFA3BdBCa2376fCFAbBE87c05B4257",
            "0x04E8fa25C1C786BB014311Ed21cd5c5e0AA0b44A276Fa6c6775F26FebAAED2fb",
            "0x04f60Ca5e2367d9Cb2f047713dBEB288475FcB7e14E717a47D7d3848C98DC4ce",
            "0x05547e736cc915eF3F475508A624d9c3c33DA5856B23Fe9D99f487Dacea67a13",
            "0x0577ef67d52B8da80116b514876C8b8C418f3527019A2CA5C07bF25d26714f21",
            "0x05799ec529081348E0a1c17b5c6dfA25DABA0c634CBAa419dB9f5b4298b48529",
            "0x0586e8d37740e23376cfeeaaadd55a3423ac403fdad668e4b9ad23c5575320dc",
            "0x058863acf3c46876f5a7d131986b94a1eda58cd18edcbcf503534a661bf67a1e",
            "0x05Cb068b58e52f20d19ec4Da91836376f264DE52f0af067B58b86de83b6Ef6Cd",
            "0x05cC789a382fFE2DbCcA344EA42491E2784E0938E7506bB36970a915A7fE5e33",
            "0x05dF1b6d56f925Dc58050DB38801d84dA2b5EC45b48e5ed64e260b655e36f52b",
            "0x05eb40eb990983cc674ae0f66fb35305ff08613ada349d0759e25b3f96977e60",
            "0x063865B2103948df4aBa69a01C502B32FbcE6DFa14eA323B9136014BBBFfA139",
            "0x06461CDe14f31B96863926e5748fF67c8331741c3E813c9360e985930F697300",
            "0x0661fDC6b170dE87c583675b2F2b6E74DC1F78208cB745b1C4ddA3586662dCb8",
            "0x066243C879305289B401b5A297351557fEf92Ae82680645a0EeCcc065a188c9C",
            "0x067a3A7c4D19B388756Ca5Ec567dD5E56fA1Bb40D95d0168a0F87302a2b77e6d",
            "0x06Cdeee45C897a485224419140b98A6027Ec28b21FECB60cAd7E7E105196d31d",
            "0x07360aee5743eBa462E17E1886Cca91bE06Ad5110fD3142D284332af3FC7248B",
            "0x07934B6F4E48E4a4ce6A65077E711eC7D2034bc8062C2F7fC33cB20c0970Fa7c",
            "0x0795ea272324B62bf2E46C3993e38FB808E434606b5F7E7AE93Fe989B174730D",
            "0x07d0E599D01A378A1906CBC6E8B6a69c7A310e543fB31503Ce06c73B67302123",
            "0x2f6189b63a8c1688a8fc8abc1a9ea46d27964c4666b92db19886334fd24e66f",
            "0x2f809edb8b1ffd707f2ba8c08dcc99f29033244ee065ace83de0465b1672a05",
            "0x36c9b1d9b513caa91c991642b4c0baf58626848cda27ff53e79ee62af3b9ba1",
            "0x38d91feb1ff00f40601a253427a35be03843ff6bec15465ed1b63a5b86689dd",
            "0x531daede43ea79fe99b2368685ca8f8cbd03cf6151f1fa562e08c48d968511b",
            "0x63f2837e8809e583820994cea735e4f95612bd59a929bf1ec73e35ccec93241",
            "0x6b66f70b8e4501eddd8e8c2ae046b207fc66b80d33397768d1048aaf9848f74",
            "0x7559c0721ea6a36a5b0317a08da540f0c64263d6fa0e0b8aa6aa8f584c19bb8",
            "0x951bbca64556e639b54c88278e6f734948969b2bdf27a2bd9008afe6d6b7c0",
        ]
    ],
]
