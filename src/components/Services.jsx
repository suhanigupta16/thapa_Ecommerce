import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div className="servicescenter-1">
              <TbTruckDelivery className="icon" />
              <h3>Super fast and free delievery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money back guranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div className="servicescenter-3">
              <RiSecurePaymentLine className="icon" />
              <h3>super secure payment system</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align-center;
    border-radius:2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    text-transform: capitalize;
  }

  .servicescenter-1,
  .servicescenter-3{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:1rem;
  }

  .services-2{
    gap:4rem;
    background-color:transparent;
    box-shadow-none;

    .services-colum-2 {
        background: ${({ theme }) => theme.colors.bg};
        display:flex;
        flex-direction:row;
        flex:1;
        border-radius:2rem;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

        div{
            display:flex;
            flex-direction:row;
            justify-content: center;
            align-items: center;
            gap:1rem;
        }

    }
  }
  h3{
    margin-top:1.4rem;
    font-size:2rem;
  }
  .icon{
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Services;
