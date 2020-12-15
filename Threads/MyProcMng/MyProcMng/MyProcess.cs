using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

namespace MyProcMng
{
    public class MyProcess : INotifyPropertyChanged
    {
        private int pId;
        private string processName;
        public int threadsCount;


        public int PId
        {
            get { return this.pId; }
            set{this.pId = value;}


        }

        public string ProcessName
        {
            get { return this.processName; }
            set
            { this.processName = value;}

        }

        public int ThreadsCount
        {
            get { return this.threadsCount; }
            set
            {this.threadsCount = value;}

        }

        public event PropertyChangedEventHandler PropertyChanged;
    }
}
