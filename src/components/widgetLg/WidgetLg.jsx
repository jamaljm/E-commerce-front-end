import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQG1l7koyETjWQ/profile-displayphoto-shrink_400_400/0/1644845710066?e=1669852800&v=beta&t=nxtv4JFwN4NqSulOskNC8I5nq4r0mrVoiAuFuMLlAW8"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nazim Filzer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQG1l7koyETjWQ/profile-displayphoto-shrink_400_400/0/1644845710066?e=1669852800&v=beta&t=nxtv4JFwN4NqSulOskNC8I5nq4r0mrVoiAuFuMLlAW8"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nazim Filzer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQG1l7koyETjWQ/profile-displayphoto-shrink_400_400/0/1644845710066?e=1669852800&v=beta&t=nxtv4JFwN4NqSulOskNC8I5nq4r0mrVoiAuFuMLlAW8"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nazim Filzer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQG1l7koyETjWQ/profile-displayphoto-shrink_400_400/0/1644845710066?e=1669852800&v=beta&t=nxtv4JFwN4NqSulOskNC8I5nq4r0mrVoiAuFuMLlAW8"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nazim Filzer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
