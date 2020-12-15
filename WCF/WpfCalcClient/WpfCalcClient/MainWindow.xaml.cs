using System;
using System.Collections.Generic;
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
using WpfCalcClient.CalcService;

namespace WpfCalcClient
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        Grid calcGrid;
        TextBox tb;
        Queue<string> ex = new Queue<string>();

        Service1Client service = new Service1Client();
        
        public MainWindow()
        {
            InitializeComponent();
            Init();
        }

        public void Init()
        {
            Border border = new Border();

            border.BorderBrush = new SolidColorBrush(Colors.Black);
            border.BorderThickness = new Thickness(10);

            calcGrid = new Grid();
            calcGrid.Width = 200;
            calcGrid.Height = 300;

            //calcGrid.ShowGridLines = true;
            for (int i = 0; i < 5; i++)
            {
                RowDefinition gridRow = new RowDefinition();
                gridRow.Height = new GridLength(50);
                calcGrid.RowDefinitions.Add(gridRow);
            }

            for (int i = 0; i < 4; i++)
            {
                ColumnDefinition gridCol = new ColumnDefinition();
                gridCol.Width = new GridLength(50);
                calcGrid.ColumnDefinitions.Add(gridCol);
            }

            int mone = 1;
            for (int i = 1; i < 4; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Button b = new Button();
                    b.Width = 50;
                    b.Height = 50;
                    b.Content = mone.ToString();
                    b.FontSize = 20;
                    b.FontWeight = FontWeights.Bold;
                    b.Click += b_Click;
                    Grid.SetRow(b, i);
                    Grid.SetColumn(b, j);
                    this.calcGrid.Children.Add(b);
                    mone++;
                }
            }

            tb = new TextBox();
            tb.Width = 200;
            tb.Height = 50;
            tb.FontSize = 20;
            tb.FontWeight = FontWeights.Bold;
            Grid.SetRow(tb, 0);
            Grid.SetColumn(tb, 0);
            
            this.calcGrid.Children.Add(tb);
            Grid.SetColumnSpan(tb, 4);


            Button bZiro = new Button();
            bZiro.Width = 100;
            bZiro.Height = 50;
            bZiro.Content = "0";
            bZiro.FontSize = 20;
            bZiro.Click += b_Click;
            bZiro.FontWeight = FontWeights.Bold;
            Grid.SetRow(bZiro, 4);
            Grid.SetColumn(tb, 0);
            this.calcGrid.Children.Add(bZiro);
            Grid.SetColumnSpan(bZiro, 2);

            Button eq = new Button();
            eq.Width = 50;
            eq.Height = 50;
            eq.Content = "=";
            eq.FontSize = 20;
            eq.Click += eq_Click;
            eq.FontWeight = FontWeights.Bold;
            Grid.SetRow(eq, 4);
            Grid.SetColumn(eq, 2);
            this.calcGrid.Children.Add(eq);
           


            string[] ops = { "+", "-", "*", "/" };
            for (int i = 1; i <= 4; i++)
            {
                 Button b = new Button();
                    b.Width = 50;
                    b.Height = 50;
                    b.Content = ops[i-1];
                    b.FontSize = 20;
                    b.FontWeight = FontWeights.Bold;
                    b.Click += b_Click;
                    Grid.SetRow(b, i);
                    Grid.SetColumn(b, 3);
                    this.calcGrid.Children.Add(b);
            }


            border.Child = calcGrid;
            this.mainPanel.Children.Add(border);
            
        }

        void eq_Click(object sender, RoutedEventArgs e)
        {
            int num1 = int.Parse(ex.Dequeue());
            string op = ex.Dequeue();
            int num2 = int.Parse(ex.Dequeue());
            double res = -1;
            try
            {
                switch (op)
                {
                    case "+":
                        res = service.Sum(num1, num2);
                        break;
                    case "-":
                        res = service.Sub(num1, num2);
                        break;
                    case "*":
                        res = service.Mul(num1, num2);
                        break;
                    case "/":
                        res = service.Div(num1, num2);
                        break;
                }

                tb.Clear();
                if (res == 0)
                    tb.Text = "impossible result!!";
                else
                {
                    tb.Text = ((int)res).ToString();
                    ex.Enqueue(((int)res).ToString());
                }
            }
            catch (Exception)
            {
                tb.Text = "unavailable :-)";
            }
            
        }

        void b_Click(object sender, RoutedEventArgs e)
        {
            if (ex.Count < 3)
            {
                string arg = (sender as Button).Content.ToString();
                if (ex.Count == 1)
                {
                    if (arg.Equals("+") || 
                        arg.Equals("-") ||
                        arg.Equals("*") ||
                        arg.Equals("/"))
                    {
                        tb.Text += arg;
                        ex.Enqueue(arg);
                    }
                }
               
                else
                {
                    tb.Text += arg;
                    ex.Enqueue(arg);
                }
            }
        }
    }
}
