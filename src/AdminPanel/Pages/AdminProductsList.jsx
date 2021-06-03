import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listOrderMine } from "../../actions/orderActions";
import ErrorMsg from "../Main/ErrorMsg";

export default function OrderHistory() {
    const dispatch = useDispatch();

    const history = useHistory();
    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);
    return (
        <React.Fragment >
            <h1
                style={{ textAlign: "left", marginBottom: "1rem", marginLeft: "5rem", marginTop: "2rem" }}
            >
                Order History
      </h1>
            {loading ? (
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : error ? (
                <ErrorMsg
                    title={"No Orders"}
                    link={"/all-products"}
                    button="Continue Shopping"
                />
            ) : (
                <table class="table">
                    <thead>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Price</th>
                        <th>Payment Status</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {orders.length ?
                            (orders.map((order) => {
                                return (
                                    <tr>
                                        <td data-label="Order ID">{order._id}</td>
                                        <td data-label="Order Date">{order.createdAt.substring(0, 10)}</td>
                                        <td data-label="Price">{order.totalPrice.toFixed(2)}</td>
                                        <td data-label="Payment Status">
                                            {order.isPaid ? order.paidAt.substring(0, 10) : "Unpaid"}
                                        </td>
                                        <td data-label="Status">
                                            {order.isDelivered
                                                ? order.deliveredAt.substring(0, 10)
                                                : "Not Delivered"}
                                        </td>
                                        <td data-label="Action">
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    history.push(`/order/${order._id}`);
                                                }}
                                            >
                                                Details
                      </button>
                                        </td>
                                    </tr>
                                )
                            })) : <tr><h1>No records</h1></tr>
                        }


                    </tbody>
                </table>
            )}
        </React.Fragment>
    );
}
