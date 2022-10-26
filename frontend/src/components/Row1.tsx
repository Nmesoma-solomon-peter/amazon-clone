import React from 'react';
import './Row1.css';
import Button from '@mui/material/Button';

function Row1() {
    return (
        <div className='row'>
            <div className="sample__rows">
                {/* 1st card */}
                <div className="row1">
                    <div className="card__1 kard me-3">
                        <h3>Gaming accessories</h3>
                        {/* <table>
                            <tr>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg' alt='img 1' />
                                    <p>Headsets</p>
                                </td>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg' alt='img 2' />
                                    <p>Keyboards</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg' alt='img 3' />
                                    <p>Computer mice</p>
                                </td>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg' alt='img 4' />
                                    <p>Chairs</p>
                                </td>
                            </tr>
                        </table> */}
                        <div className='innercard__row'>
                            <div >
                                <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg' alt='img 1' />
                                <p>Headsets</p>
                            </div>
                            <div>
                                <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg' alt='img 2' />
                                <p>Keyboards</p>
                            </div>

                        </div>
                        <div className='innercard__row'>
                            <div >
                                <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg' alt='img 1' />
                                <p>Headsets</p>
                            </div>
                            <div>
                                <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg' alt='img 2' />
                                <p>Keyboards</p>
                            </div>

                        </div>
                        <p>See more</p>
                    </div>
                    {/* 2nd card */}
                    <div className="card__2 kard me-3">
                        <h3>Shop by Category</h3>
                        <table>
                            <tr>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg' alt='img 1' />
                                    <p>Computers & accessories</p>
                                </td>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg' alt='img 2' />
                                    <p>Video Games</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg' alt='img 3' />
                                    <p>Baby</p>
                                </td>
                                <td>
                                    <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg' alt='img 4' />
                                    <p>Toys & Games</p>
                                </td>
                            </tr>
                        </table>
                        <p>Shop now</p>
                    </div>
                    {/* 3rd card */}
                    <div className="card__3 kard me-3">
                        <h3>Health & Personal Care</h3>
                        <div>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg" alt="health care" />
                        </div>
                        <p>Shop now</p>
                    </div>
                    {/* 4th card */}
                    <div className="card__4 kard">
                        <div className="sign__in">
                            <h3>
                                Sign in for the best experience
                            </h3>
                            <button>Sign in securely</button>
                        </div>
                        <div className="add">
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg' alt='we ship' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row1