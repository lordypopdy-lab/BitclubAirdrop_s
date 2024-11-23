import { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {

  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        {/* <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        <div className="content">
          <div className=" container-fluid">
            <div className="row bg_image">
              <div className="col-xl-12 pt-2">
                <div className="bg-secondary rounded">
                  <div style={{ opacity: "1" }} className="bg-secondary rounded m-2 p-2">
                    <h3 className='mt-1' style={{ marginBottom: "-6px" }}>341,837</h3>
                    <span style={styles.text}><span className='text-white'>$BTCLB </span></span>
                    <i style={{ color: "#ffc107", float: "right", top: "6%", right: "8%", position: "absolute" }} className="fa fa-credit-card me-2"></i>

                    <p className='bg-dark mt-3 text-center rounded' style={{ width: "100%" }}>
                      <i className="fas fw-300 text-white fa-wallet m-2" style={styles.icon}></i>
                      <span style={styles.text1}>Connect Wallet</span>
                    </p>

                  </div>
                  <p className='bg-dark m-1 p-4' style={{ marginTop: "-12px", borderTopRightRadius: "25px", borderTopLeftRadius: "25px" }}>
                    <h6 style={styles.text1} className=''>Balance</h6>
                    <img src="https://cryptologos.cc/logos/toncoin-ton-logo.png?v=035" width={20} height={20} alt="" srcset="" />
                    <span className='m-1'>$TON</span><br />
                    <span style={{ fontSize: "12px", marginLeft: "25px", display: "flex", marginTop: "-4px" }}>0 $TON</span>
                    <DotLottieReact
                      src="https://lottie.host/44a18572-40a9-48c5-887c-888c97dd8c0e/DTLACWHCtx.lottie"
                      loop
                      autoplay
                      width={700}
                      style={{ position: "relative", left: "5%", display: "flex", marginLeft: "100px", marginTop: "-56px" }}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="wrapper mt-4">
              <div className="row bg-secondary align-items-center">
                <span className='text-small' style={styles.text}>BITCLUB Missions</span>
                <div style={{boxShadow: "1px 1px 1px 2px #6C7293"}} className="col bg-dark m-1 rounded p-3">
                  <p>
                    <img src="/logo/48.png" width={20} height={20} alt="" />
                    <span style={{ fontSize: "14px", margin: "3px" }}>Bitclub</span>
                  </p>

                  <button style={{ width: "100%", boxShadow: "1px 1px 1px 2px #6C7293" }} className='btn btn-small bg-secondary'>Go</button>
                </div>
                <div style={{boxShadow: "1px 1px 1px 2px #6C7293"}} className="col bg-dark m-1 rounded p-3">
                  <p>
                    <img src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png" width={20} height={20} alt="" />
                    <span style={{ fontSize: "14px", margin: "3px" }}>Twitter</span>
                  </p>

                  <button style={{ width: "100%", boxShadow: "1px 1px 1px 2px #6C7293" }} className='btn btn-small bg-secondary'>Go</button>
                </div>
                <div style={{boxShadow: "1px 1px 1px 2px #6C7293"}} className="col bg-dark m-1 rounded p-3">
                  <p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jV31DQxq31fTTIxaUrNp3XdqYvWzfyux-E6pzrZ9fb4UYFiVfFdJ&usqp=CAE&s" width={25} height={25} alt="" />
                    <span style={{ fontSize: "13px", margin: "3px" }}>Telegram</span>
                  </p>

                  <button style={{ width: "100%", boxShadow: "1px 1px 1px 2px #6C7293" }} className='btn btn-small bg-secondary'>Go</button>
                </div>
              </div>

              <div className="row bg-secondary mt-3 align-items-center">
                <div className="col bg-dark m-1 rounded">
                  <a href="#" className="btn  btn-dark">
                
                    <small>Recharge1</small></a>
                </div>
                <div className="col bg-dark m-1 rounded">
                  <a href="#" data-toggle="modal" data-target="#diamond" className="btn  btn-dark"><i style={{ color: "#ffc107" }} className="fa fa-industry me-2"></i><small>Recharge2</small></a>
                </div>
                <div className="col bg-dark m-1 rounded">
                  <a href="test1.php" className="btn text-center btn-dark"><i style={{ color: "#ffc107" }} className="fa fa-cart-plus me-2"></i><small>Markets..</small></a>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid pt-4 px-0" style={{marginBottom: ""}}>
            <div className="row g-4">
              <div className="col-sm-12">
                <div className="h-100 bg-secondary rounded p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    x
                    <a style={{ color: "#ffc107" }} href="">Show All</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="btn btn-lg btn-primary mb-5 btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div >
      <div style={styles.menuBar}>
        <div style={styles.iconContainer}>
          <i className="fas fa-home" style={styles.icon}></i>
          <span style={styles.label}>Home</span>
        </div>
        <div style={styles.iconContainer}>
          <i className="fas fa-star" style={styles.icon}></i>
          <span style={styles.label}>Ranking</span>
        </div>
        <div style={styles.iconContainer}>
          <i className="fas fa-rocket" style={styles.icon}></i>
          <span style={styles.label}>Missions</span>
        </div>
        <div style={styles.iconContainer}>
          <i className="fas fa-user-friends" style={styles.icon}></i>
          <span style={styles.label}>Friends</span>
        </div>
        <div style={styles.iconContainer}>
          <i className="fas fa-exchange-alt" style={styles.icon}></i>
          <span style={styles.label}>Airdrop</span>
        </div>
      </div>
    </>
  )
}

const styles = {
  menuBar: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: "5px 0",
    boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
    borderTopRightRadius: "12px",
    borderTopLeftRadius: "12px"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "14px",
    marginBottom: "22px",
    backgroundColor: "#191C24",
    width: "100px",
    padding: "8px",
    textAlign: "center"
  },
  icon: {
    color: "#ffc107",
    fontSize: "17px",
    marginBottom: "5px",
  },
  label: {
    fontSize: "12px",
    color: "#ffffff"
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "10px",
    padding: "5px 17px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    marginLeft: "50px"
  },
  text: {
    fontSize: "14px"
  },
  text1: {
    fontSize: "14px",
    cursor: "pointer"
  },
  connectbtn: {
    marginLeft: "17px"
  }
};

export default App
