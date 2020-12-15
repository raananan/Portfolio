using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Xml.Linq;
using System.Net;

namespace WateringWCF
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in both code and config file together.
    public class Service1 : IService1
    {
        private const string APPKEY = "b50ccbaca5ae91cdd033c6eef9fd3436";
        public Watering GetData(string city)
        {
            XDocument doc = GetXml(city);
            double temp = GetTemperature(doc);
            double winSpeed = GetWinSpeed(doc);
            double watherState = GetWatherState(doc);
            return new Watering
            {
                City = city,
                WeatherAttr = new Dictionary<string, double>
                {
                   {"temp",temp}, 
                   {"winSpeed",winSpeed}, 
                   {"watherState",watherState}
 
                }
            };
        }

        private XDocument GetXml(string city)
        {
            string url = string.Format(@"http://api.openweathermap.org/data/2.5/weather?q={0}&mode=xml&APPID={1}&unit=metric", city, APPKEY);
            try
            {
                using (WebClient wc = new WebClient())
                {
                    byte [] rawData = wc.DownloadData(url);
                    return XDocument.Parse(System.Text.Encoding.UTF8.GetString(rawData));

                }
            }
            catch
            {
                return null;
            }

        }

        private double GetTemperature(XDocument doc)
        {
            foreach (XElement elem in doc.Descendants("temperature"))
            {
                double temp = double.Parse(elem.Attribute("value").Value.ToString());
                return temp;
            }

            return -999;
        }

        private double GetWinSpeed(XDocument doc)
        {
            foreach (XElement elem in doc.Descendants("wind").Descendants("speed"))
            {
                double winSpeed = double.Parse(elem.Attribute("value").Value.ToString());
                return winSpeed;
            }

            return -999;
        }

        private double GetWatherState(XDocument doc)
        {
            foreach (XElement elem in doc.Descendants("weather"))
            {
                double state = double.Parse(elem.Attribute("number").Value.ToString());
                return state;
            }

            return -999;
        }

       
    }
}
