namespace EGameSocketClient
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_conn = new System.Windows.Forms.Button();
            this.txt_gameId = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txt_memberId = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.txt_deviceId = new System.Windows.Forms.TextBox();
            this.cmb_device = new System.Windows.Forms.ComboBox();
            this.richTextBox1 = new System.Windows.Forms.RichTextBox();
            this.btnBig = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            this.btnSmall = new System.Windows.Forms.Button();
            this.label6 = new System.Windows.Forms.Label();
            this.btnOdd = new System.Windows.Forms.Button();
            this.label7 = new System.Windows.Forms.Label();
            this.btnEven = new System.Windows.Forms.Button();
            this.label8 = new System.Windows.Forms.Label();
            this.btnRed = new System.Windows.Forms.Button();
            this.btnBlack = new System.Windows.Forms.Button();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.btnHit = new System.Windows.Forms.Button();
            this.btnIn = new System.Windows.Forms.Button();
            this.btnOut = new System.Windows.Forms.Button();
            this.Hit = new System.Windows.Forms.Label();
            this.label12 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.lblFirst = new System.Windows.Forms.Label();
            this.lblSecond = new System.Windows.Forms.Label();
            this.lblThird = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btn_conn
            // 
            this.btn_conn.Location = new System.Drawing.Point(18, 159);
            this.btn_conn.Name = "btn_conn";
            this.btn_conn.Size = new System.Drawing.Size(75, 23);
            this.btn_conn.TabIndex = 0;
            this.btn_conn.Text = "连接";
            this.btn_conn.UseVisualStyleBackColor = true;
            this.btn_conn.Click += new System.EventHandler(this.btn_conn_Click);
            // 
            // txt_gameId
            // 
            this.txt_gameId.Location = new System.Drawing.Point(81, 24);
            this.txt_gameId.Name = "txt_gameId";
            this.txt_gameId.Size = new System.Drawing.Size(100, 21);
            this.txt_gameId.TabIndex = 1;
            this.txt_gameId.Text = "1";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(16, 28);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(47, 12);
            this.label1.TabIndex = 2;
            this.label1.Text = "game id";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(16, 59);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(59, 12);
            this.label2.TabIndex = 4;
            this.label2.Text = "member id";
            // 
            // txt_memberId
            // 
            this.txt_memberId.Location = new System.Drawing.Point(81, 55);
            this.txt_memberId.Name = "txt_memberId";
            this.txt_memberId.Size = new System.Drawing.Size(100, 21);
            this.txt_memberId.TabIndex = 3;
            this.txt_memberId.Text = "1";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(15, 89);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(41, 12);
            this.label3.TabIndex = 6;
            this.label3.Text = "device";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(15, 120);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(59, 12);
            this.label4.TabIndex = 8;
            this.label4.Text = "device id";
            // 
            // txt_deviceId
            // 
            this.txt_deviceId.Location = new System.Drawing.Point(81, 116);
            this.txt_deviceId.Name = "txt_deviceId";
            this.txt_deviceId.Size = new System.Drawing.Size(100, 21);
            this.txt_deviceId.TabIndex = 7;
            this.txt_deviceId.Text = "123456";
            // 
            // cmb_device
            // 
            this.cmb_device.FormattingEnabled = true;
            this.cmb_device.Items.AddRange(new object[] {
            "MOBILE",
            "WEB",
            "PC",
            "PAD"});
            this.cmb_device.Location = new System.Drawing.Point(81, 86);
            this.cmb_device.Name = "cmb_device";
            this.cmb_device.Size = new System.Drawing.Size(100, 20);
            this.cmb_device.TabIndex = 9;
            // 
            // richTextBox1
            // 
            this.richTextBox1.Location = new System.Drawing.Point(12, 188);
            this.richTextBox1.Name = "richTextBox1";
            this.richTextBox1.Size = new System.Drawing.Size(629, 310);
            this.richTextBox1.TabIndex = 11;
            this.richTextBox1.Text = "";
            // 
            // btnBig
            // 
            this.btnBig.Location = new System.Drawing.Point(231, 28);
            this.btnBig.Name = "btnBig";
            this.btnBig.Size = new System.Drawing.Size(101, 23);
            this.btnBig.TabIndex = 12;
            this.btnBig.Text = "1.97";
            this.btnBig.UseVisualStyleBackColor = true;
            this.btnBig.Click += new System.EventHandler(this.btnBig_Click);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(200, 33);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(29, 12);
            this.label5.TabIndex = 13;
            this.label5.Text = "Big:";
            // 
            // btnSmall
            // 
            this.btnSmall.Location = new System.Drawing.Point(390, 27);
            this.btnSmall.Name = "btnSmall";
            this.btnSmall.Size = new System.Drawing.Size(101, 23);
            this.btnSmall.TabIndex = 12;
            this.btnSmall.Text = "1.97";
            this.btnSmall.UseVisualStyleBackColor = true;
            this.btnSmall.Click += new System.EventHandler(this.btnSmall_Click);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(346, 32);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(41, 12);
            this.label6.TabIndex = 13;
            this.label6.Text = "Small:";
            // 
            // btnOdd
            // 
            this.btnOdd.Location = new System.Drawing.Point(231, 59);
            this.btnOdd.Name = "btnOdd";
            this.btnOdd.Size = new System.Drawing.Size(101, 23);
            this.btnOdd.TabIndex = 12;
            this.btnOdd.Text = "1.97";
            this.btnOdd.UseVisualStyleBackColor = true;
            this.btnOdd.Click += new System.EventHandler(this.btnOdd_Click);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(200, 64);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(29, 12);
            this.label7.TabIndex = 13;
            this.label7.Text = "Odd:";
            // 
            // btnEven
            // 
            this.btnEven.Location = new System.Drawing.Point(390, 58);
            this.btnEven.Name = "btnEven";
            this.btnEven.Size = new System.Drawing.Size(101, 23);
            this.btnEven.TabIndex = 12;
            this.btnEven.Text = "1.97";
            this.btnEven.UseVisualStyleBackColor = true;
            this.btnEven.Click += new System.EventHandler(this.btnEven_Click);
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(352, 63);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(35, 12);
            this.label8.TabIndex = 13;
            this.label8.Text = "Even:";
            // 
            // btnRed
            // 
            this.btnRed.Location = new System.Drawing.Point(231, 90);
            this.btnRed.Name = "btnRed";
            this.btnRed.Size = new System.Drawing.Size(101, 23);
            this.btnRed.TabIndex = 12;
            this.btnRed.Text = "1.97";
            this.btnRed.UseVisualStyleBackColor = true;
            this.btnRed.Click += new System.EventHandler(this.btnRed_Click);
            // 
            // btnBlack
            // 
            this.btnBlack.Location = new System.Drawing.Point(390, 89);
            this.btnBlack.Name = "btnBlack";
            this.btnBlack.Size = new System.Drawing.Size(101, 23);
            this.btnBlack.TabIndex = 12;
            this.btnBlack.Text = "1.97";
            this.btnBlack.UseVisualStyleBackColor = true;
            this.btnBlack.Click += new System.EventHandler(this.btnBlack_Click);
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(200, 95);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(29, 12);
            this.label9.TabIndex = 13;
            this.label9.Text = "Red:";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(346, 94);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(41, 12);
            this.label10.TabIndex = 13;
            this.label10.Text = "Black:";
            // 
            // btnHit
            // 
            this.btnHit.Location = new System.Drawing.Point(540, 28);
            this.btnHit.Name = "btnHit";
            this.btnHit.Size = new System.Drawing.Size(101, 23);
            this.btnHit.TabIndex = 12;
            this.btnHit.Text = "1.97";
            this.btnHit.UseVisualStyleBackColor = true;
            this.btnHit.Click += new System.EventHandler(this.btnHit_Click);
            // 
            // btnIn
            // 
            this.btnIn.Location = new System.Drawing.Point(540, 59);
            this.btnIn.Name = "btnIn";
            this.btnIn.Size = new System.Drawing.Size(101, 23);
            this.btnIn.TabIndex = 12;
            this.btnIn.Text = "1.97";
            this.btnIn.UseVisualStyleBackColor = true;
            this.btnIn.Click += new System.EventHandler(this.btnIn_Click);
            // 
            // btnOut
            // 
            this.btnOut.Location = new System.Drawing.Point(540, 90);
            this.btnOut.Name = "btnOut";
            this.btnOut.Size = new System.Drawing.Size(101, 23);
            this.btnOut.TabIndex = 12;
            this.btnOut.Text = "1.97";
            this.btnOut.UseVisualStyleBackColor = true;
            this.btnOut.Click += new System.EventHandler(this.btnOut_Click);
            // 
            // Hit
            // 
            this.Hit.AutoSize = true;
            this.Hit.Location = new System.Drawing.Point(507, 33);
            this.Hit.Name = "Hit";
            this.Hit.Size = new System.Drawing.Size(29, 12);
            this.Hit.TabIndex = 13;
            this.Hit.Text = "Hit:";
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Location = new System.Drawing.Point(513, 64);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(23, 12);
            this.label12.TabIndex = 13;
            this.label12.Text = "In:";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Location = new System.Drawing.Point(507, 95);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(29, 12);
            this.label13.TabIndex = 13;
            this.label13.Text = "Out:";
            // 
            // lblFirst
            // 
            this.lblFirst.AutoSize = true;
            this.lblFirst.Location = new System.Drawing.Point(216, 144);
            this.lblFirst.Name = "lblFirst";
            this.lblFirst.Size = new System.Drawing.Size(47, 12);
            this.lblFirst.TabIndex = 14;
            this.lblFirst.Text = "label11";
            // 
            // lblSecond
            // 
            this.lblSecond.AutoSize = true;
            this.lblSecond.Location = new System.Drawing.Point(504, 144);
            this.lblSecond.Name = "lblSecond";
            this.lblSecond.Size = new System.Drawing.Size(47, 12);
            this.lblSecond.TabIndex = 15;
            this.lblSecond.Text = "label11";
            // 
            // lblThird
            // 
            this.lblThird.AutoSize = true;
            this.lblThird.Location = new System.Drawing.Point(359, 144);
            this.lblThird.Name = "lblThird";
            this.lblThird.Size = new System.Drawing.Size(47, 12);
            this.lblThird.TabIndex = 16;
            this.lblThird.Text = "label11";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(106, 159);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 0;
            this.button1.Text = "生成地址";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(652, 520);
            this.Controls.Add(this.lblThird);
            this.Controls.Add(this.lblSecond);
            this.Controls.Add(this.lblFirst);
            this.Controls.Add(this.label13);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label12);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.Hit);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.btnOut);
            this.Controls.Add(this.btnBlack);
            this.Controls.Add(this.btnIn);
            this.Controls.Add(this.btnEven);
            this.Controls.Add(this.btnRed);
            this.Controls.Add(this.btnOdd);
            this.Controls.Add(this.btnHit);
            this.Controls.Add(this.btnSmall);
            this.Controls.Add(this.btnBig);
            this.Controls.Add(this.richTextBox1);
            this.Controls.Add(this.cmb_device);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.txt_deviceId);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.txt_memberId);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txt_gameId);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.btn_conn);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_conn;
        private System.Windows.Forms.TextBox txt_gameId;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txt_memberId;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox txt_deviceId;
        private System.Windows.Forms.ComboBox cmb_device;
        private System.Windows.Forms.RichTextBox richTextBox1;
        private System.Windows.Forms.Button btnBig;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button btnSmall;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Button btnOdd;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Button btnEven;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Button btnRed;
        private System.Windows.Forms.Button btnBlack;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Button btnHit;
        private System.Windows.Forms.Button btnIn;
        private System.Windows.Forms.Button btnOut;
        private System.Windows.Forms.Label Hit;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label lblFirst;
        private System.Windows.Forms.Label lblSecond;
        private System.Windows.Forms.Label lblThird;
        private System.Windows.Forms.Button button1;
    }
}

