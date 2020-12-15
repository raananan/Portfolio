﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WpfCalcClient.CalcService {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="CalcService.IService1")]
    public interface IService1 {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Sum", ReplyAction="http://tempuri.org/IService1/SumResponse")]
        double Sum(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Sum", ReplyAction="http://tempuri.org/IService1/SumResponse")]
        System.Threading.Tasks.Task<double> SumAsync(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Sub", ReplyAction="http://tempuri.org/IService1/SubResponse")]
        double Sub(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Sub", ReplyAction="http://tempuri.org/IService1/SubResponse")]
        System.Threading.Tasks.Task<double> SubAsync(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Mul", ReplyAction="http://tempuri.org/IService1/MulResponse")]
        double Mul(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Mul", ReplyAction="http://tempuri.org/IService1/MulResponse")]
        System.Threading.Tasks.Task<double> MulAsync(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Div", ReplyAction="http://tempuri.org/IService1/DivResponse")]
        double Div(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Div", ReplyAction="http://tempuri.org/IService1/DivResponse")]
        System.Threading.Tasks.Task<double> DivAsync(double num1, double num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Mod", ReplyAction="http://tempuri.org/IService1/ModResponse")]
        int Mod(int num1, int num2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/Mod", ReplyAction="http://tempuri.org/IService1/ModResponse")]
        System.Threading.Tasks.Task<int> ModAsync(int num1, int num2);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IService1Channel : WpfCalcClient.CalcService.IService1, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class Service1Client : System.ServiceModel.ClientBase<WpfCalcClient.CalcService.IService1>, WpfCalcClient.CalcService.IService1 {
        
        public Service1Client() {
        }
        
        public Service1Client(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public Service1Client(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public Service1Client(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public Service1Client(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public double Sum(double num1, double num2) {
            return base.Channel.Sum(num1, num2);
        }
        
        public System.Threading.Tasks.Task<double> SumAsync(double num1, double num2) {
            return base.Channel.SumAsync(num1, num2);
        }
        
        public double Sub(double num1, double num2) {
            return base.Channel.Sub(num1, num2);
        }
        
        public System.Threading.Tasks.Task<double> SubAsync(double num1, double num2) {
            return base.Channel.SubAsync(num1, num2);
        }
        
        public double Mul(double num1, double num2) {
            return base.Channel.Mul(num1, num2);
        }
        
        public System.Threading.Tasks.Task<double> MulAsync(double num1, double num2) {
            return base.Channel.MulAsync(num1, num2);
        }
        
        public double Div(double num1, double num2) {
            return base.Channel.Div(num1, num2);
        }
        
        public System.Threading.Tasks.Task<double> DivAsync(double num1, double num2) {
            return base.Channel.DivAsync(num1, num2);
        }
        
        public int Mod(int num1, int num2) {
            return base.Channel.Mod(num1, num2);
        }
        
        public System.Threading.Tasks.Task<int> ModAsync(int num1, int num2) {
            return base.Channel.ModAsync(num1, num2);
        }
    }
}