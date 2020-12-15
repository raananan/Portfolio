using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace WcfCalculatorService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface IService1
    {
        [OperationContract]
        double Sum(double num1, double num2);
        [OperationContract]
        double Sub(double num1, double num2);
        [OperationContract]
        double Mul(double num1, double num2);
        [OperationContract]
        double Div(double num1, double num2);
        [OperationContract]
        int Mod(int num1, int num2);
        
        
    }

    
}
