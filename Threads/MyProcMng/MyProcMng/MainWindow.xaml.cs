using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace MyProcMng
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        List<MyProcess> processList = new List<MyProcess>();

        public MainWindow()
        {
            InitializeComponent();
            ReadProcess();

        }

        private void ReadProcess()
        {
            int multiThreadCount = 0;
            Process[] process_arr = Process.GetProcesses();
            MyProcess my_process;
            foreach (var p in process_arr)
            {
                my_process = new MyProcess();
                my_process.PId = p.Id;
                my_process.ProcessName = p.ProcessName;
                my_process.ThreadsCount = p.Threads.Count;
                processList.Add(my_process);
                multiThreadCount = my_process.ThreadsCount > 1 ? multiThreadCount +1 : multiThreadCount;

            }

            this.lsProc.ItemsSource = processList;
            MessageBox.Show(string.Format("multi theards process count is: {0}%", 
                ((double)multiThreadCount / processList.Count) * 100));
        }

    }
}
