import { NavLink } from 'react-router-dom';
import LogoCoffe from '../../assets/Logo.png'
import { HeaderContainer } from './style'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

export function Header(){

    const [location, setLocation] = useState({
      city: "Não informado",
      state: "Não informado"
    });

    useEffect(() => {
      const getlocation = async () => {
        try {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                const url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=6835de534093c856243867lhb60f5e2`;

                fetch(url)
                  .then((response) => response.json())
                  .then((data) => {
                    const address = data.address;
                    const city = address?.city;
                    const state = address?.state;
                    setLocation({ city, state });
                  })
                  .catch((error) => console.error("Error:", error));
              },
              (error) => {
                console.error("Error:", error);
              }
            );
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      getlocation();
    }, []);

    const { getTotalQuantity } = useCart();

    return (
      <HeaderContainer>
        <NavLink to="/" title="Localização" className="localization">
          <img src={LogoCoffe} alt="Logo do Coffe Delivery" />
        </NavLink>

        <nav>
          <NavLink to="/" title="Localização" className="localization">
            <MapPin weight="fill" />
            {location?.city}
          </NavLink>

          <NavLink
            to="/carrinho"
            title="Carrinho de compras"
            className="shopping-car"
          >
            <ShoppingCart weight="fill" />
            {getTotalQuantity() > 0 && (
              <span className="quantityCart">{getTotalQuantity()}</span>
            )}
          </NavLink>
        </nav>
      </HeaderContainer>
    );
}