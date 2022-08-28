import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import message from "../assets/images/icon-conversations-small.svg";
import leads from "../assets/images/icon-leads-small.svg";
import active from "../assets/images/star active.svg";
import defaultStar from "../assets/images/star default.svg";

const data = [
  {
    id: 1,
    name: "Axa",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130",
    description:
      "AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc",
    campaigns_count: 20,
    leads_count: 1500,
    is_favorited: true,
    is_archived: false,
    created_at: "28 July 2018",
  },
  {
    id: 2,
    name: "Indeed - US",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
    description:
      "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
    campaigns_count: 15,
    leads_count: 7130,
    is_favorited: false,
    is_archived: false,
    created_at: "15 October 2018",
  },
  {
    id: 3,
    name: "Indeed - EU",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
    description:
      "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
    campaigns_count: 18,
    leads_count: 3500,
    is_favorited: false,
    is_archived: false,
    created_at: "1 October 2018",
  },
  {
    id: 4,
    name: "Workday - US",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
    description:
      "Workday Inc is an on demand financial management and human capital management something とかなんとか",
    campaigns_count: 16,
    leads_count: 2000,
    is_favorited: false,
    is_archived: false,
  },
  {
    id: 5,
    name: "Workday - AU",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
    description:
      "Workday Inc is an on demand financial management and human capital management something とかなんとか",
    campaigns_count: 12,
    leads_count: 1500,
    is_favorited: false,
    is_archived: false,
  },
  {
    id: 6,
    name: "Time",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/979/twitter/5-hanayome-avatar.jpg?1547281143",
    description:
      "Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff",
    campaigns_count: 13,
    leads_count: 10000,
    is_favorited: true,
    is_archived: false,
  },
  {
    id: 7,
    name: "Zendesk",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/924/twitter/uzamaid-avatar.png?1538475352",
    description:
      "Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess",
    campaigns_count: 17,
    leads_count: 1200,
    is_favorited: true,
    is_archived: false,
  },
  {
    id: 8,
    name: "Uber",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/965/twitter/kemono-friends-2-avatar.jpg?1546501240",
    description:
      "Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess",
    campaigns_count: 10,
    leads_count: 3200,
    is_favorited: false,
    is_archived: true,
  },
  {
    id: 9,
    name: "Grab",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655",
    description:
      "GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people",
    campaigns_count: 23,
    leads_count: 2000,
    is_favorited: false,
    is_archived: true,
  },
];

const Content = (props) => {

  const [team, setTeam] = useState([]);
  let teams = [];
  
  const setteams = () => {
    if(props.type === "all"){
      for (let i = 0; i < data.length; i++) {
        teams.push(data[i]);
      }
      setTeam(teams);
    }else if(props.type === "favourite"){
      for (let i = 0; i < data.length; i++) {
        if(data[i].is_favorited === true){
          teams.push(data[i]);
        }
      }
      console.log(teams);
      setTeam(teams);

    }else if(props.type === "archived"){
      for (let i = 0; i < data.length; i++) {
        if(data[i].is_archived === true){
          teams.push(data[i]);
        }
      }
      setTeam(teams);

    }
    // if(teams.length > 0){
    //   setTeam(teams);
    // }
  }

  useEffect(() => {
    setteams();
  }, [props])

  // console.log(team, teams);


 

  const activities = [
    {
      id: 1,
      person: {
        id: 1,
        name: "Julie",
        avatar:
          "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139",
      },
      action: "increased_quota",
      target: "Indeed - US",
      created_at: "2 hours ago",
    },
    {
      id: 2,
      person: {
        id: 2,
        name: "Emily",
        avatar:
          "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656",
      },
      action: "added_leads",
      target: "Linkedin",
      created_at: "4 hours ago",
    },
    {
      id: 3,
      person: {
        id: 2,
        name: "Emily",
        avatar:
          "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656",
      },
      action: "archived_team",
      target: "Uber",
    },
    {
      id: 4,
      person: {
        id: 1,
        name: "Julie",
        avatar:
          "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139",
      },
      action: "archived_team",
      target: "Grab",
      created_at: "6 hours ago",
    },
    {
      id: 5,
      person: {
        id: 1,
        name: "Julie",
        avatar:
          "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139",
      },
      action: "added_leads",
      target: "Workday - AU",
      created_at: "2 hours ago",
    },
  ];

  const current_user = {
    id: 4,
    name: "John",
    avatar:
      "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040",
    notifications_count: 5,
  };

  return (
    <div
      style={{
        margin: 30,
        position: "absolute",
        top: "25%",
        left: "4%",
        right: "0",
        backgroundColor: "#E5E5E5",
        width: "90%",
      }}
    >
      <Container>
        <Row>
          <Col md={9}>
            <div
              style={{
                backgroundColor: "#ffffff",
                boxShadow:
                  "0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                maxWidth: "70%"
              }}
            >
              <div
                class="d-flex justify-content-between align-items-center"
                style={{
                  padding: 10,
                  borderBottom: "1px solid #EFEFEF",
                }}
              >
                <p style={{ margin: 0, fontWeight: 600, fontSize: 18 }}>
                  All Teams
                </p>
                <div>
                  <span style={{ fontSize: 14, color: "#7F7F7F" }}>
                    Showing {team.length} out of {team.length} teams
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  margin: 15,
                  padding: 0,
                }}
              >
                {team && team.length > 0 &&
                  team.map((item) => (
                    <div
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #E4E7EC",
                        borderRadius: 4,
                        marginLeft: 10,
                        padding: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div style={{ borderBottom: "1px solid #E4E7EC" }}>
                        <div class="d-flex justify-content-left align-items-center">
                          <img
                            src={item.image}
                            alt="company name"
                            style={{ width: 36, height: 36 }}
                          />
                          <div style={{ marginLeft: 10 }}>
                            <p
                              style={{
                                fontSize: 16,
                                color: "#444444",
                                margin: 0,
                              }}
                            >
                              {item.name}
                            </p>
                            <p
                              style={{
                                fontSize: 13,
                                color: "#565656",
                                opacity: "0.5",
                                marginTop: "-5px",
                                marginBottom: 0,
                              }}
                            >
                              {item.created_at}
                            </p>
                          </div>
                            <img src={item.is_favorited ? active : defaultStar} alt= "favourite" style={{marginLeft: "auto"}}/>
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: "proximaNova",
                              fontSize: 14,
                              color: "#565656",
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <img src={message} alt="messgae" />
                        <span
                          style={{
                            fontSize: 13,
                            fontFamily: "ProximaNova",
                            color: "#000000",
                            opacity: "0.45",
                            margin: "0px 5px",
                          }}
                        >
                          {item.campaigns_count} campaigns
                        </span>
                        <img src={leads} alt="leads" />
                        <span
                          style={{
                            fontSize: 13,
                            fontFamily: "ProximaNova",
                            color: "#000000",
                            opacity: "0.45",
                            margin: "0px 5px",
                          }}
                        >
                          {item.leads_count} leads
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div
              style={{
                backgroundColor: "#ffffff",
                boxShadow:
                  "0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  padding: 20,
                  borderBottom: "1px solid #EFEFEF",
                  marginBottom: 20,
                }}
              >
                <p style={{ fontWeight: 600, margin: 0 }}>Activity</p>
              </div>
              <div style={{margin: 20}}>
                <div class="d-flex justify-content-left align-items-center">
                  <img
                    src="https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
                    style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
                  />
                  <div>
                    <p style={{ fontSize: 14, fontFamily: "ProxiNova", margin: 0 }}>
                      Julie increased <span style={{fontWeight: 600}}>Indeed-Us</span> quota.
                    </p>
                    <span style={{ fontSize: 13, fontFamily: "ProxiNova", marginTop: "-10px", color: "#565656", opacity: "0.5" }}>2 hours ago</span>
                  </div>
                </div>
              </div>
              <div style={{margin: 20}}>
                <div class="d-flex justify-content-left align-items-center">
                  <img
                    src="https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
                    style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
                  />
                  <div>
                    <p style={{ fontSize: 14, fontFamily: "ProxiNova", margin: 0 }}>
                      Emily added new leads to <span style={{fontWeight: 600}}>Linkedin</span>.
                    </p>
                    <span style={{ fontSize: 13, fontFamily: "ProxiNova", marginTop: "-10px", color: "#565656", opacity: "0.5" }}>4 hours ago</span>
                  </div>
                </div>
              </div>
              <div style={{margin: 20}}>
                <div class="d-flex justify-content-left align-items-center">
                  <img
                    src="https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
                    style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
                  />
                  <div>
                    <p style={{ fontSize: 14, fontFamily: "ProxiNova", margin: 0 }}>
                      Emily archived the team <span style={{fontWeight: 600}}>Uber</span>.
                    </p>
                    {/* <span style={{ fontSize: 13, fontFamily: "ProxiNova", marginTop: "-10px", color: "#565656", opacity: "0.5" }}>2 hours ago</span> */}
                  </div>
                </div>
              </div>
              <div style={{margin: 20}}>
                <div class="d-flex justify-content-left align-items-center">
                  <img
                    src="https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
                    style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
                  />
                  <div>
                    <p style={{ fontSize: 14, fontFamily: "ProxiNova", margin: 0 }}>
                      Julie archived the team <span style={{fontWeight: 600}}>Grab</span>.
                    </p>
                    <span style={{ fontSize: 13, fontFamily: "ProxiNova", marginTop: "-10px", color: "#565656", opacity: "0.5" }}>6 hours ago</span>
                  </div>
                </div>
              </div>
              <div style={{margin: 20}}>
                <div class="d-flex justify-content-left align-items-center">
                  <img
                    src="https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
                    style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
                  />
                  <div>
                    <p style={{ fontSize: 14, fontFamily: "ProxiNova", margin: 0 }}>
                      Julie added new leads to <span style={{fontWeight: 600}}>Workaday - AU</span>.
                    </p>
                    <span style={{ fontSize: 13, fontFamily: "ProxiNova", marginTop: "-10px", color: "#565656", opacity: "0.5" }}>2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
