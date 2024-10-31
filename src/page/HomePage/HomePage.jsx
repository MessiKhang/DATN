import Image from "./images/background.webp";
import Image1 from "./images/sp1.webp";
import Image2 from "./images/khaivi.webp";
import Image3 from "./images/myY.webp";
import Image4 from "./images/Salad.webp";
import Image5 from "./images/left.webp";
import Hot2 from "./images/hot2.webp";
import Hot3 from "./images/hot3.webp";
import Hot1 from "./images/hot1.webp";
import Hot4 from "./images/hot4.webp";
import GaImg from "./images/ga1.webp";
import GaImg2 from "./images/ga2.webp";
import Piza1 from "./images/pz1.webp";
import Piza2 from "./images/pz2.webp";
import Piza3 from "./images/pz3.webp";
import Piza4 from "./images/pz4.webp";
import ImgSale50 from "./images/flash_sale.webp";
import { Box, DanhMuc, WrapperProduct } from "./style";
import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setProducts(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const productsSalad = products.slice(30, 34);
    const productsPizza = products.slice(30, 35);
    return (
        <div>
            <Box>
                <img
                    style={{ padding: "40px 128px" }}
                    src={Image}
                    alt=""
                    width="1260px"
                    height="508px"
                />
            </Box>
            <DanhMuc>
                <u>Danh Mục Nổi Bật</u>
            </DanhMuc>
            <WrapperProduct>
                <div className={styles.product}>
                    <b>Pizza (17 món ăn)</b>
                    <img className={styles.imgg} src={Image1} alt="" />
                </div>
                <div className={styles.product}>
                    <b>Khai vị (13 món ăn)</b>
                    <img className={styles.imgg2} src={Image2} alt="" />
                </div>
                <div className={styles.product}>
                    <b>Mỳ Ý (7 món ăn)</b>
                    <img className={styles.imgg3} src={Image3} alt="" />
                </div>
                <div className={styles.product}>
                    <b>Salad (7 món ăn)</b>
                    <img className={styles.imgg4} src={Image4} alt="" />
                </div>
            </WrapperProduct>

            <div className={styles.block}>
                <div className={styles.blockleft}>
                    <img className={styles.br} src={Image5} alt="" />
                </div>

                <h1 className={styles.h1}>Về chúng tôi</h1>
                <h1 className={styles.h3}>Dola Food</h1>
                <p className={styles.p}>
                    Chào mừng bạn đến với Dola Food - điểm đến lý tưởng cho
                    những người yêu thưởng thức pizza tại thành phố! Dola Food
                    tự hào là địa chỉ pizza hàng đầu, nổi tiếng với chất lượng
                    món ăn tuyệt vời, dịch vụ tận tâm và mức độ hài lòng cao từ
                    phía khách hàng.
                </p>
                <div className={styles.right}>
                    <img
                        className={styles.piza}
                        src={Piza1}
                        alt=""
                        width="200px"
                        height="200px"
                    />
                    <img
                        className={styles.piza}
                        src={Piza2}
                        alt=""
                        width="200px"
                        height="200px"
                    />
                    <img
                        className={styles.piza}
                        src={Piza3}
                        alt=""
                        width="200px"
                        height="200px"
                    />
                    <img
                        className={styles.piza}
                        src={Piza4}
                        alt=""
                        width="200px"
                        height="200px"
                    />
                </div>
            </div>

            <div className={styles.container_product}>
                <h2 className={styles.monAnNB}>Món Ăn Nổi Bật</h2>
                <div className={styles.product_ga}>
                    <div className={styles.product_items}>
                        <div className={styles.product_item}>
                            <img
                                className={styles.img_ga}
                                src={GaImg}
                                alt=""
                                style={{ width: "155px", height: "118px" }}
                                //clas
                            />
                            <div className={styles.product_item_content}>
                                <h3 className={styles.gaxot}>
                                    Gà Giòn Xốt Tương Tỏi Hàn Quốc
                                </h3>
                                <p className={styles.textga}>
                                    Những miếng gà tươi ngon tẩm bột chiên giòn
                                    phủ xốt tương tỏi kiểu Hàn được chế biến
                                    theo công...
                                </p>
                                <span className={styles.Gia}>Giá chỉ từ:</span>
                                <p
                                    className={styles.textgia}
                                    style={{
                                        color: "#e31837",
                                        fontSize: "17px",
                                        fontWeight: "bold",
                                        margin: "0",
                                    }}
                                >
                                    99.000đ
                                </p>
                                <button className={styles.btmua}>Mua</button>
                            </div>
                        </div>

                        <div className={styles.product_item}>
                            <img
                                className={styles.img_ga}
                                src={GaImg2}
                                alt=""
                                style={{ width: "140px", height: "105px" }}
                            />
                            <div className={styles.product_item_content}>
                                <h3 className={styles.gaxot}>
                                    Gà Giòn Xốt Hàn - Truyền Thống (9 miếng)
                                </h3>
                                <p className={styles.textga}>
                                    Gà tẩm bột chiên giòn rụm phủ lớp xốt (có
                                    chút vị cay rất nhẹ) đặc trưng theo kiểu
                                    truyền thống Hàn Quốc.
                                </p>
                                <span className={styles.Gia}>Giá chỉ từ:</span>
                                <p
                                    className={styles.textgia}
                                    style={{
                                        color: "#e31837",
                                        fontSize: "17px",
                                        fontWeight: "bold",
                                        margin: "0",
                                    }}
                                >
                                    429.000đ
                                </p>
                                <button className={styles.btmua}>Mua</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.row_Hot}>
                <div className={styles.text}>
                    <h6 className={styles.chuongtrinh}>Chương Trình</h6>
                </div>
                <div className={styles.text_chuongtrinh}>
                    <h1 className={styles.NoiBat}>Các Chương Trình Nổi Bật</h1>
                </div>
                <div className={styles.box_big}>
                    <div className={styles.box_hot4}>
                        <div className={styles.hot}>
                            <img className={styles.imgHot} src={Hot1} alt="" />
                        </div>
                        <div className={styles.hot}>
                            <img className={styles.imgHot} src={Hot2} alt="" />
                        </div>
                        <div className={styles.hot}>
                            <img className={styles.imgHot} src={Hot3} alt="" />
                        </div>
                        <div className={styles.hot}>
                            <img className={styles.imgHot} src={Hot4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.row_GiamGia}>
                <div className={styles.row50}>
                    <div className={styles.box_GiamGia}>
                        <h3 className={styles.MonAn}>Món Ăn</h3>
                        <span className={styles.Dang_GiamGia}>
                            Đang được giảm giá
                        </span>
                        <p className={styles.text_GiamGia}>
                            Chúng tôi thường xuyên cập nhật những chương trình
                            khuyến mãi để quý thực khách có thể trải nghiệm tất
                            cả món ăn của chúng tôi.
                        </p>
                        <p className={styles.chuongtrinh_ketthuct}>
                            Chương trình đã kết thúc, hẹn gặp lại trong thời
                            gian sớm nhất!
                        </p>
                    </div>
                    <div className={styles.img_sale}>
                        <img className={styles.img50} src={ImgSale50} alt="" />
                    </div>
                </div>
                <div className={styles.box_api}>
                    <div className={styles.item_api}>
                        {productsSalad.map((product) => (
                            <div
                                className={styles.product_info}
                                key={product.id}
                            >
                                <img
                                    src={product.img}
                                    alt=""
                                    style={{
                                        width: "275px",
                                        height: "208px",
                                        borderRadius: "5px",
                                        paddingTop: "30px",
                                    }}
                                />
                                <div className={styles.text_api}>
                                    <h3 className={styles.name}>
                                        {product.name}
                                    </h3>
                                    <p className={styles.description}>
                                        {product.description}
                                    </p>
                                    <p className={styles.price}>
                                        Giá: {product.price}đ
                                    </p>
                                    <button className={styles.button_api}>
                                        Mua
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.center}>
                    <h6 className={styles.center1}>Món Ăn</h6>
                    <h1 className={styles.centero}>Được Bán Nhiều Nhất</h1>
                </div>
                <div className={styles.box_api2}>
                    <div className={styles.item_api2}>
                        {productsPizza.map((product) => (
                            <div
                                className={styles.product_info2}
                                key={product.id}
                            >
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{
                                        width: "230px",
                                        height: "180px",
                                        paddingTop: "10px",
                                    }}
                                />
                                <div className={styles.text_api}>
                                    <h3 className={styles.name}>
                                        {product.name}
                                    </h3>
                                    <p className={styles.description}>
                                        {product.description}
                                    </p>
                                    <p className={styles.price}>
                                        Giá: {product.price}đ
                                    </p>
                                    <button className={styles.button_api}>
                                        Mua
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
