# 收集 ../../libraries 下所有 jar 文件
$allJars = Get-ChildItem -Path "../../libraries" -Recurse -Filter "*.jar" | ForEach-Object { $_.FullName }

if ($allJars.Count -eq 0) {
    Write-Host "错误：未在 ../../libraries 下找到任何 jar 文件" -ForegroundColor Red
    exit 1
}

# 分离 Netty 相关 jar（路径包含 "netty"）和其他 jar
$nettyJars = $allJars | Where-Object { $_ -match "netty" }
$otherJars = $allJars | Where-Object { $_ -notmatch "netty" }

# 对 Netty jar 按路径排序（默认按字符串排序，通常高版本号会靠后，但也可反向）
# 为了尽量让高版本靠前，我们可以按文件名中的版本号进行自然排序（此处简化，按完整路径排序）
$nettyJarsSorted = $nettyJars | Sort-Object -Descending   # 降序让版本号大的在前（如果版本号在文件名中）

# 构建 classpath：Netty 优先，然后其他，最后追加当前目录的 1.21.1.jar
$classpath = ($nettyJarsSorted -join ";") + ";" + ($otherJars -join ";") + ";TLHWorld.jar"

# 创建临时参数文件（不带 BOM 的 UTF-8）
$argFile = [System.IO.Path]::GetTempFileName()
$lines = @(
    "-cp",
    $classpath,
    "net.minecraft.data.Main",
    "--all"
)
[System.IO.File]::WriteAllLines($argFile, $lines, [System.Text.UTF8Encoding]::new($false))

try {
    java @$argFile
} finally {
    Remove-Item $argFile -ErrorAction SilentlyContinue
}

pause